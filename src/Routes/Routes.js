import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/home',
            element: <Home />
        },
        {
            path: '/chats',
            element: <Chat />
        }],
    }
])