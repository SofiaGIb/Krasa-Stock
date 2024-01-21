import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider>

 <BrowserRouter>
 <React.StrictMode>
    <App />
  </React.StrictMode>,
 </BrowserRouter>
 </Provider>
)
