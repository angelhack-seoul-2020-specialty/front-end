import { Main, Login, Request, History } from '../pages/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/login',
    exact: false,
    component: Login
  },
  {
    path: '/request',
    exact: false,
    component: Request
  },
  {
    path: '/history',
    exact: false,
    component: History
  },
  {
    path: '*',
    exact: false,
    children: '404 NOT FOUND'
  }
]

export default routes
