import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Error from './Error';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'register',
        element:<Register/>
      },

    ]
  },
  {
    path: '*',
    element: <Error/>
  }
])