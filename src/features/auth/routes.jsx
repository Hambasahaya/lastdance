import AuthLayout from '../../layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
export default {
  path: '/',
  element: <AuthLayout />,
  children: [
     { index: true, element: <LoginPage /> },
    { path: 'login', element: <LoginPage /> },
  ],
}