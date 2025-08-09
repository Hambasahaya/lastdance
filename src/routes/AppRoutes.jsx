import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import authRoutes from '../features/auth/routes'
import MainLayout from '../layouts/mainLayout'
import Home from '../features/Home/Pages/Homepages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      {
        index: true,
        element: <Home />
      }
    ],
  },
  authRoutes,
])

export default function AppRoutes() {
  return <RouterProvider router={router} />
}
