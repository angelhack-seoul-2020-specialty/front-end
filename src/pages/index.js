import { lazy } from 'react'

export const Main = lazy(() => import('./main'))
export const Login = lazy(() => import('./login'))
export const LoginType = lazy(() => import('./login-type'))
export const Requset = lazy(() => import('./request'))
export const History = lazy(() => import(('./history')))
