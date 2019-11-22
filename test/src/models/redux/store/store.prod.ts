import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore, compose } from 'redux'
import createRootReducer from '../rootReducer'
import history from 'models/history'
import { rapperEnhancer } from 'models/rapper'

const myRouterMiddleware = routerMiddleware(history)

const store = createStore(
  createRootReducer(history),
  compose(
    rapperEnhancer({ maxCacheLength: 5 }),
    applyMiddleware(myRouterMiddleware)
  )
)

export default store
