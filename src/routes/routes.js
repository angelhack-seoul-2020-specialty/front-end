import { Main, Login, LoginType } from '../pages/index'

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
  }
]

export default routes
