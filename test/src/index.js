import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import * as serviceWorker from './serviceWorker'

import App from './components/common/App'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
