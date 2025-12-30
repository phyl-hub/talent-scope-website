import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* <--- ADD THIS HERE inside BrowserRouter */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)