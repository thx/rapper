import React, { Suspense } from 'react'

import { findLeaf, findRouter, IAmbigousNode, isRouterNode, isRouterMap, SName, SAside, SHidden, SDisabled, SExternal, SQuery, SIcon } from './router'
import { useSelector } from 'react-redux'
import { getLocationPathname } from 'models/redux/modules/common/selectors'
import { ifUserHasPermission } from 'models/redux/modules/auth/selectors'
import { stringify } from 'querystring'
import history from 'models/history'

import { MuxLoading, MuxNavAside } from '@alife/mux-components'
const { MenuItem } = MuxNavAside

// 【侧边栏匹配逻辑】
// 尝试匹配树深 0 - 1 的路径
// └─ 若匹配失败，则不渲染 Aside
// └─ 若匹配成功，尝试匹配树深 2 - 3 的目录树，或展现树深 2 设置的 [SAside]
function Aside() {
  const pathname = useSelector(getLocationPathname)
  const getPermisssion = useSelector(ifUserHasPermission)

  const leaf = findLeaf(pathname)
  if (!leaf) {
    return null
  }

  const pathSegs = leaf.pathname.split(/\/+/)
  const base = pathSegs.slice(0, 3).join('/')
  const Router = findRouter(base)
  if (!Router) {
    return null
  }

  const onChange = (val: string[]) => {
    let path = val[val.length - 1]
    const node = findRouter(path)
    const disabled = typeof Router[SDisabled] === 'string' ? getPermisssion(Router[SDisabled] as string) : !!Router[SDisabled]
    if (!node || disabled) {
      return
    }
    if (!isRouterMap(node)) {
      if (node[SExternal]) {
        return
      }
      if (node[SQuery]) {
        path += `?${stringify(node[SQuery])}`
      }
    }
    history.push(path)
  }

  return SAside in Router
    ? (
      <Suspense
        fallback={(
          <MuxLoading>
            <div className="site-loading-filler" />
          </MuxLoading>
        )}
      >
        {Router[SAside]}
      </Suspense>
    )
    : (
      <MuxNavAside
        key={base}
        active={[pathSegs.slice(0, 4).join('/'), pathSegs.slice(0, 5).join('/')]}
        onChange={onChange}
      >
        {renderAsideMenu(Router, base)}
      </MuxNavAside>
    )

  function renderAsideMenu(router: IAmbigousNode, path: string = 'key', depth: number = 1) {
    const disabled = typeof router[SDisabled] === 'string' ? getPermisssion(router[SDisabled] as string) : !!router[SDisabled]

    if (!isRouterMap(router)) {
      return (
        <MenuItem
          key={path}
          value={path}
          disabled={disabled}
          label={
            router[SExternal]
              ? <a href={router[SExternal]} target="_blank" rel="noopener">{router[SName]}</a>
              : router[SName]
          }
          icon={depth !== 2 ? undefined : router[SIcon]}
        />
      )
    }
    if (depth > 3) {
      return null
    }
    const doms: React.ReactNode[] = []
    for (const key of Object.keys(router)) {
      const hidden = typeof router[key][SHidden] === 'string'
        ? !getPermisssion(router[key][SHidden] as string)
        : !!router[key][SHidden]
      if (!hidden) {
        doms.push(
          renderAsideMenu(router[key], `${path}/${key}`, depth + 1)
        )
      }
    }
    return depth === 1
      ? doms
      : (
        <MenuItem
          key={path}
          value={path}
          icon={router[SIcon]}
          label={
            (isRouterNode(router) && router[SExternal])
              ? <a href={router[SExternal]} target="_blank" rel="noopener">{router[SName]}</a>
              : router[SName]
          }
        >
          {doms}
        </MenuItem>
      )
  }
}
export default Aside
