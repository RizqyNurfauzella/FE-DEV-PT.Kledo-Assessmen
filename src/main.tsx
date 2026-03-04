import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { regionLoader } from './loaders/regionLoader'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: regionLoader,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
