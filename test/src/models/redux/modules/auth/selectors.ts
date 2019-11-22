import { RootState } from '../../rootReducer'
import { createSelector } from 'reselect'
import { rapperSelector, Models } from 'models/rapper'

export type IPermissionKey = keyof Models['GET/api/member/getInfo.json']['Res']['data']['permission']

export const ifUserHasPermission = createSelector(
  (state: RootState) => rapperSelector['GET/api/member/getInfo.json'](state),
  state => (key: string) => {
    return state?.data.permission[key as IPermissionKey] || false
  }
)
