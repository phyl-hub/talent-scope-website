import React, { useEffect } from 'react' // Import useEffect
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router-dom' // Import useLocation
import { HelmetProvider } from 'react-helmet-async'

// Create a simple "ScrollToTop" component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // When the path changes, scroll to the top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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