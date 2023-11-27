//* Base React imports
import React from 'react';
import ReactDOM from 'react-dom/client'

//* React Router imports
import { 
  createBrowserRouter,
  RouterProvider
  } from 'react-router-dom';

//* Styles
import './main.scss'

//* Components
import Feed from './components/App/Main/Feed/Feed.jsx';
import App from './components/App/App.jsx'
import Profile from './components/App/Main/Menu/Profile/Profile.jsx';
import Content from './components/App/Main/Menu/Content/Content.jsx'
import Messages from './components/App/Main/Menu/Messages/Messages.jsx';
import News from './components/App/Main/Menu/News/News.jsx';
import Music from './components/App/Main/Menu/Music/Music.jsx';
import Media from './components/App/Header/Navigation/Media/Media.jsx'
import Activity from './components/App/Header/Navigation/Activity/Activity.jsx';



//* Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "content",
        element: <Content />
      },
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "news",
        element: <News />
      },
      {
        path: "music",
        element: <Music />
      },
      {
        path: "media",
        element: <Media />
      },
      {
        path: "activity",
        element: <Activity />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
