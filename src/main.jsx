
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-7mxdre47q4grkp2o.us.auth0.com"
    clientId="xAafJp7PEZtb9KHYFnkiRcbe0gFfdzNi"
    authorizationParams={{
      redirect_uri: window.location.origin, // ✅ must match your Auth0 dashboard callback URL
    }}
  >
    <App/>
</Auth0Provider>

)
