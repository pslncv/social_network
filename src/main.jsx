//* Base React imports
import React from 'react';
import ReactDOM from 'react-dom/client'

//* Components
import App from './components/App/App.jsx'

//* Styles
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
