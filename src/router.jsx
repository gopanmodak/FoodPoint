import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Error from './Error';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Profile from "./pages/Profile";

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
        path: 'profile',
        element: <PrivateRoutes><Profile/> </PrivateRoutes>
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