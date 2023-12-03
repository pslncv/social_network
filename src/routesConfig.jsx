//* Base React imports
import React from 'react';

//* React Router imports
import { createBrowserRouter } from 'react-router-dom';

//* Components
import Feed from './components/App/Main/Feed/Feed.jsx';
import App from './components/App/App.jsx';
import Profile from './components/App/Main/Menu/Profile/Profile.jsx';
import Content from './components/App/Main/Menu/Content/Content.jsx';
import Chat from './components/App/Main/Menu/Chat/Chat.jsx';
import News from './components/App/Main/Menu/News/News.jsx';
import Music from './components/App/Main/Menu/Music/Music.jsx';
import Media from './components/App/Header/Navigation/Media/Media.jsx';
import Activity from './components/App/Header/Navigation/Activity/Activity.jsx';
import DialogProfile from './components/App/Main/Menu/Chat/DialogsList/DialogProfile/DialogProfile.jsx';

const routesConfig = createBrowserRouter([
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
            path: "dialogs",
            element: <Chat />,
            children: [
            {
                path: '1',
                element: <DialogProfile />,
            },
            {
                path: '2',
                element: <DialogProfile />,
            },
            {
                path: '3',
                element: <DialogProfile />,
            },
            {
                path: '4',
                element: <DialogProfile />,
            },
            {
                path: '5',
                element: <DialogProfile />,
            },
            {
                path: '6',
                element: <DialogProfile />,
            },
            {
                path: '7',
                element: <DialogProfile />,
            },
            {
                path: '8',
                element: <DialogProfile />,
            },
            {
                path: '9',
                element: <DialogProfile />,
            },
            {
                path: '10',
                element: <DialogProfile />,
            }
            ]
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

export default routesConfig