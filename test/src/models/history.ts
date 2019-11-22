import { createBrowserHistory } from 'history'
import { parse, stringify } from 'querystring'

const history = createBrowserHistory()
const { push, replace } = history

interface IAmbigousObject {
  [key: string]: IAmbigousObject | string | number
}

type extendedPushOrReplaceFn = (firstArg: string | IAmbigousObject, state?: IAmbigousObject) => void
type extendedHistory = {
  push: extendedPushOrReplaceFn
  replace: extendedPushOrReplaceFn
}

export default Object.assign(history, {
  push: (firstArg, state) => {
    const prefix = typeof firstArg === 'object'
      ? history.location.pathname
      : firstArg.split('?')[0]
    const searchObject = typeof state === 'object'
      ? state
      : typeof firstArg === 'object'
        ? firstArg
        : parse(firstArg.split('?')[1] || '')
    const prevStateObject = parse(history.location.search.slice(1))
    const nextSearchObject = typeof firstArg === 'string'
      ? searchObject
      : Object.assign(prevStateObject, searchObject)
    return push.call(history, {
      pathname: prefix,
      search: `?${stringify(nextSearchObject)}`,
    })
  },
  replace: (firstArg, state) => {
    const prefix = typeof firstArg === 'object'
      ? history.location.pathname
      : firstArg.split('?')[0]
    const searchObject = typeof state === 'object'
      ? state
      : typeof firstArg === 'object'
        ? firstArg
        : parse(firstArg.split('?')[1] || '')
    const prevStateObject = parse(history.location.search.slice(1))
    const nextSearchObject = typeof firstArg === 'string'
      ? searchObject
      : Object.assign(prevStateObject, searchObject)
    return replace.call(history, {
      pathname: prefix,
      search: `?${stringify(nextSearchObject)}`,
    })
  },
} as extendedHistory)
