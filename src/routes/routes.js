import { Main, Login, LoginType, Requset, History } from '../pages/index'

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
    path: '/login-type',
    exact: false,
    component: LoginType
  },
  {
    path: '/request',
    exact: false,
    component: Requset
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
