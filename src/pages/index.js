import { lazy } from 'react'

export const Main = lazy(() => import('./main'))
export const Login = lazy(() => import('./login'))
export const Request = lazy(() => import('./request'))
export const History = lazy(() => import(('./history')))
