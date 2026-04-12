import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import HomePage from './Components/Pages/HomePage/HomePage'
import BooksPage from './Components/Pages/BooksPage/BooksPage'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {index: true, Component: HomePage},
      {path: '/books', Component: BooksPage},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
