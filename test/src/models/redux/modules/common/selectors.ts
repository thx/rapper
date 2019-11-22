import { RootState } from '../../rootReducer'
import { parse } from 'querystring'
import { createSelector } from 'reselect'

export const getLocationSearch = createSelector(
  (state: RootState) => state.router.location.search,
  search => {
    const result = parse(search.replace('?', ''))
    return Array.isArray(result) ? result[0] : result
  }
)

export const getLocationPathname = createSelector(
  (state: RootState) => state.router.location.pathname,
  path => path
)
