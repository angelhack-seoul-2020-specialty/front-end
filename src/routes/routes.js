import { Main, Login } from '../pages/index'

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
  }
]

export default routes
