//* Base React imports
import React from 'react';
import ReactDOM from 'react-dom/client'

//* React Router imports
import { RouterProvider } from 'react-router-dom';

//* Styles
import './main.scss'

//* Components
import routesConfig from './routesConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routesConfig} />
  </React.StrictMode>
)
