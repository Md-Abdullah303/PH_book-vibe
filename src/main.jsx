import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import BookProvaider from './context/BookContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvaider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookProvaider>
  </StrictMode>,
)
