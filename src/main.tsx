import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { webRouter } from './routes'
import { AuthProvider } from './shared/contexts/auth/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={webRouter} />
    </AuthProvider>
  </React.StrictMode>,
)
