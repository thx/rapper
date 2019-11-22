import React, { useEffect } from 'react'

import { RouterMaps, IAmbigousNode, isRouterNode, isRouterMap, SName, SHidden, SDisabled, SExternal, SQuery, findLeaf } from './router'
import { useSelector } from 'react-redux'
import { getLocationPathname } from 'models/redux/modules/common/selectors'
import { ifUserHasPermission } from 'models/redux/modules/auth/selectors'
import { stringify } from 'querystring'
import history from 'models/history'

import { MuxNavBar, MuxMenu, MuxLoading } from '@alife/mux-components'
import { Link } from 'react-router-dom'
import { fetch, useResponse } from 'models/rapper'

const { Item: MenuItem } = MuxMenu

function onNodeClick(curKey: string, node: IAmbigousNode) {
  if (node[SExternal] || node[SDisabled]) {
    return
  }
  let path = /^\//.test(curKey) ? curKey : '/' + curKey
  if (isRouterNode(node)) {
    if (node[SQuery]) {
      path += `?${stringify(node[SQuery])}`
    }
  }
  history.push(path)
}

function Header() {
  const pathname = useSelector(getLocationPathname)
  const getPermisssion = useSelector(ifUserHasPermission)
  const key = pathname.split('/').slice(0, 2).join('/')
  const leaf = findLeaf(pathname)
  const [userInfo, { isPending: isUserLoading }] = useResponse['GET/api/member/getInfo.json']()

  useEffect(() => {
    fetch['GET/api/member/getInfo.json']()
  }, [])

  useEffect(() => {
    if (leaf && leaf.pathname !== pathname) {
      history.replace(leaf.pathname)
    }
  }, [pathname])

  const HeaderFooter = userInfo
    ? (
      <MuxLoading loading={isUserLoading}>
        {userInfo.data.meta.nickName}，
        <a href="/logout.do">退出</a>
      </MuxLoading>
    ) : undefined

  const HeaderLogo = (
    <Link to="/" className="site-logo">
      <img
        src="https://img.alicdn.com/tfs/TB1jA.rLQvoK1RjSZPfXXXPKFXa-448-98.png"
        alt="Marquex Pro"
      />
    </Link>
  )

  return (
    <>
      <MuxNavBar
        className="basic-nav"
        logo={HeaderLogo}
        footer={HeaderFooter}
        activeValue={[key]}
      >
        {renderRouters(RouterMaps, '', 0)}
      </MuxNavBar>
    </>
  )

  function renderRouters(base: IAmbigousNode, prevKey: string, depth: number) {
    if (depth > 1) {
      return null
    }
    return Object.entries(base)
      .filter(([_, node]) => typeof node[SHidden] === 'string' ? getPermisssion(node[SHidden] as string) : !node[SHidden])
      .map(([key, node]) => {
        const isMap = isRouterMap(node)
        const isNode = isRouterNode(node)
        const curKey = `${prevKey}/${key}`
        const disabled = typeof node[SDisabled] === 'string' ? getPermisssion(node[SDisabled] as string) : !!node[SDisabled]

        if (isNode || (isMap && depth === 1)) {
          // 1 深度中间结点或者叶子结点
          return (
            <MenuItem
              key={curKey}
              value={curKey}
              label={
                node[SExternal]
                  ? <a href={node[SExternal]} target="_blank" rel="noopener">{node[SName]}</a>
                  : node[SName]
              }
              disabled={disabled}
              onClick={() => onNodeClick(curKey, node)}
            />
          )
        } else if (isMap && depth === 0) {
          // 0 深度中间结点或者叶子结点
          if (Object.keys(node).length) {
            return (
              <MenuItem
                key={curKey}
                value={curKey}
                label={node[SName]}
                onClick={() => onNodeClick(key, node)}
              >
                {renderRouters(node, curKey, depth + 1)}
              </MenuItem>
            )
          } else {
            return (
              <MenuItem
                key={curKey}
                value={curKey}
                label={node[SName]}
                disabled={disabled}
                onClick={() => onNodeClick(key, node)}
              />
            )
          }
        }
        return null
      })
  }
}

export default Header
