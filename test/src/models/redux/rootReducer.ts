import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { rapperReducers } from 'models/rapper'

export interface RootState {
  router: RouterState
}

const rootReducer = (history: History) => combineReducers({
  ...rapperReducers,
  router: connectRouter(history),
})

export default rootReducer
