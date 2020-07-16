import { Main, Login, LoginType, Requset } from '../pages/index'

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
  }
]

export default routes
