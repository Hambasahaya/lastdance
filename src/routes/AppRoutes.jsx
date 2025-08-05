import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import authRoutes from '../features/auth/routes'
import MainLayout from '../layouts/mainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
    ],
  },
  authRoutes,
])

export default function AppRoutes() {
  return <RouterProvider router={router} />
}
