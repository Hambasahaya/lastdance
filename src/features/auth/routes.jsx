import AuthLayout from '../../layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
export default {
  path: '/auth',
  element: <AuthLayout />,
  children: [
     { index: true, element: <LoginPage /> },
    { path: 'login', element: <LoginPage /> },
  ],
}