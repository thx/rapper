import React, { ReactElement } from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RouteComponentProps } from 'react-router-dom'
import { isRouterNode, findRouter, SView, SHidden } from './router'
import { ifUserHasPermission } from 'models/redux/modules/auth/selectors'

import NotFound from './NotFoundView'

export interface IMatchParams {
  word: string
}
export interface IMatchProps extends RouteComponentProps<IMatchParams> { }

function PossiblePage(
  matchProps: IMatchProps
): ReactElement | null {
  const getPermisssion = useSelector(ifUserHasPermission)

  const { location } = matchProps
  const { pathname } = location
  const router = findRouter(pathname)

  if (!router) {
    return <Route component={NotFound} />
  }
  if (typeof router[SHidden] === 'string' && !getPermisssion(router[SHidden] as string)) {
    return <h1>403 您暂时没有权限查看此页面</h1>
  }

  if (isRouterNode(router)) {
    const Comp = router[SView]
    return Comp ? <Comp /> : Comp
  }
  const firstPath = `${pathname}/${Object.keys(router)[0]}`
  if (firstPath !== pathname && firstPath.lastIndexOf(pathname) > -1) {
    // 如果不存在相关页面，且当前路径能被第一个 path 完整包含，则进入第一个 path
    return (
      <PossiblePage
        {...matchProps}
        location={{
          ...location,
          pathname: firstPath,
        }}
      />
    )
  } else {
    return (
      <>
        <Route path={`${pathname}/:word`} component={PossiblePage} />
        <Route component={NotFound} />
      </>
    )
  }
}

export default () => {
  return <Route component={PossiblePage} />
}
