import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppSettingsProvider } from './context/AppSettingsProvider.jsx'
import { RouterProvider } from './router/RouterProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppSettingsProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </AppSettingsProvider>
  </StrictMode>,
)
