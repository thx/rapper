import { lazy } from 'react'

export const HomeView = lazy(() => import(/* webpackChunkName: "./views/HomeView" */ '../../views/HomeView'))

export const UmopPagesAuthView = lazy(() => import(/* webpackChunkName: "./views/umop/pages/AuthView" */ '../../views/umop/pages/AuthView'))

export const UmopPagesIframeView = lazy(() => import(/* webpackChunkName: "./views/umop/pages/IframeView" */ '../../views/umop/pages/IframeView'))
