import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { MuxLoading, MuxChart } from '@alife/mux-components'
// @ts-ignore
import Chartx from 'chartx/dist/chartx.es'
import MainRouter from './MainRouter'
import Header from './Header'
import Aside from './Aside'
import '../../styles/atomic.less'
import '../../styles/site.less'
import '@alife/mux-components/build/lib/index.css'

import { ConnectedRouter } from 'connected-react-router'
import customHistory from 'models/history'
import store from 'models/redux/store'

MuxChart.use(Chartx)
Chartx.setGlobalTheme(['#5a79e0', '#e06e5a', '#e05a67', '#e0a65a', '#7ee05a', '#5ae0e0', '#5a92e0', '#925ae0', '#e05a99'])

export default () => (
  <Provider store={store}>
    <ConnectedRouter
      history={customHistory}
    >
      <>
        <Header />
        <div className="site-main">
          <Aside />
          <div className="site-main-inner">
            <Suspense
              fallback={(
                <MuxLoading loading={true}>
                  <div className="wrap-fullscreen" />
                </MuxLoading>
              )}
            >
              <MainRouter />
            </Suspense>
          </div>
        </div>
      </>
    </ConnectedRouter>
  </Provider>
)
