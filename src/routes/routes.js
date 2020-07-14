import { Login } from '../pages/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: null
  },
  {
    path: '/login',
    exact: false,
    component: Login
  }
]

export default routes
