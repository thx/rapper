import { LazyExoticComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import {
  HomeView,
  UmopPagesAuthView,
  UmopPagesIframeView,
} from './all-routes'
import { IPermissionKey } from 'models/redux/modules/auth/selectors'

/** 用于顶栏、侧边栏、面包屑中展现 */
export const SName = Symbol.for('SName')
/** 当路由符合配置路径时的实际视图 */
export const SView = Symbol.for('SView')
/** 侧边栏在当前级别下是否有默认树层级展现。如果设置为一个其他视图值，则为自定义值；如果设置为 null，则隐藏侧边栏 */
export const SAside = Symbol.for('SAside')
/** 从顶栏、侧边栏中是否可见。通常用于创建额外的层级而不展现实体，或判断路由内容是否符合用户权限 */
export const SHidden = Symbol.for('SHidden')
/** 是否禁用点击 */
export const SDisabled = Symbol.for('SDisabled')
/** 是否指向外部链接 */
export const SExternal = Symbol.for('SExternal')
/** 侧边栏中图标 */
export const SIcon = Symbol.for('SIcon')
/** 路由包含的 kv，用于一个视图适配多种不同入口，需要额外追加参数的场景 */
export const SQuery = Symbol.for('SQuery')

export type IAmbigousNode = IRouterNode | IRouterMap

/** 为避免和实际路径冲突，属性采用 symbol */
interface IRouterCommon {
  [SName]: string
  [SAside]?: LazyExoticComponent<any> | null
  [SIcon]?: string
  [SHidden]?: boolean | IPermissionKey
  [SDisabled]?: boolean | IPermissionKey
  [SExternal]?: string
}
/** 路由的叶子节点 */
export interface IRouterNode extends IRouterCommon {
  [SView]: LazyExoticComponent<any> | null    // 注意 Node 和 Map 的区别在于前者有 view 而后者没有
  [SQuery]?: {
    [key: string]: string
  }
  /** 叶子节点禁止自由发挥 */
  [key: string]: never
}
/** 路由的非叶子节点 */
export interface IRouterMap extends IRouterCommon {
  /** 可能的树节点，与文件夹树一一对应 */
  [key: string]: IAmbigousNode
}
export const RouterMaps: IRouterMap = {
  [SName]: '首页',
  index: {
    [SName]: '首页',
    [SView]: HomeView,
    [SAside]: null,
    [SHidden]: true,
  },
  umop: {
    [SName]: 'UMOP',
    pages: {
      [SName]: '全部',
      [SHidden]: true,
      iframe: {
        [SName]: 'iframe 嵌入',
        [SView]: UmopPagesIframeView,
      },
      auth1: {
        [SName]: '权限判断 1',
        [SView]: UmopPagesAuthView,
        [SHidden]: 'account_admarketing_r',
      },
      auth2: {
        [SName]: '权限判断 2',
        [SView]: UmopPagesAuthView,
        [SDisabled]: 'account_admarketing_r',
      },
      auth3: {
        [SName]: '权限判断 3-0',
        auth30: {
          [SName]: '权限判断 3-1',
          [SView]: UmopPagesAuthView,
          [SDisabled]: 'account_admarketing_r',
        },
      },
    },
  },
  externals: {
    [SName]: '文档',
    [SDisabled]: true,
    react: {
      [SName]: 'React',
      [SView]: null,
      [SExternal]: 'https://reactjs.org/docs/getting-started.html',
    },
    marquex: {
      [SName]: 'Marquex',
      [SView]: null,
      [SExternal]: 'https://marquex.alibaba-inc.com/',
    },
    router: {
      [SName]: 'TypeScript 锦囊',
      [SView]: null,
      [SExternal]: 'https://yuque.antfin-inc.com/docs/share/0657a44e-d39e-4cd0-a4e6-2dcf60f7ded3',
    },
  },
}

export type IFindResult = IAmbigousNode | null
export const findRouter = (context: string, baseRouter = RouterMaps) => {
  let inputs = context.split('/').filter(a => !!a)
  if (!inputs.length) {
    inputs = ['index']
  }
  return inputs.reduce((prev: IFindResult, next: string): IFindResult => {
    if (typeof prev !== 'object' || !prev) {
      return null
    }
    if (next in prev && isRouterMap(prev)) {
      return prev[next]
    }
    return null
  }, baseRouter)
}

export function isRouterNode(
  val: IRouterNode | IRouterMap | string
): val is IRouterNode {
  if (typeof val === 'string') {
    return false
  }
  return typeof (val as IRouterNode)[SView] === 'object' || typeof (val as IRouterNode)[SView] === 'function'
}

export function isRouterMap(
  val: IRouterNode | IRouterMap | string
): val is IRouterMap {
  if (typeof val === 'string') {
    return false
  }
  return Object.keys(val).length > 0
}

interface LeafResult {
  router: IRouterNode
  pathname: string
}
export const findLeaf = (pathname: string): LeafResult | null => {
  const router = findRouter(pathname)
  if (!router) {
    return null
  }
  if (isRouterNode(router)) {
    return {
      router,
      pathname,
    }
  }
  const firstPath = `${pathname}/${Object.keys(router)[0]}`
  if (firstPath !== pathname && firstPath.lastIndexOf(pathname) > -1) {
    // 如果不存在相关页面，且当前路径能被第一个 path 完整包含，则尝试模糊匹配第一个 path
    return findLeaf(firstPath)
  }
  return null
}
