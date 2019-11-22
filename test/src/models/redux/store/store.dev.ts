import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { rapperEnhancer } from 'models/rapper'

import createRootReducer from '../rootReducer'
import history from 'models/history'

const loggerMiddleware = createLogger()
const myRouterMiddleware = routerMiddleware(history)

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    rapperEnhancer({ maxCacheLength: 5 }),
    applyMiddleware(myRouterMiddleware, loggerMiddleware)
  )
)

export default store
