import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AllBestFoodCard from "./pages/AllBestFoodCard";
import AddFood from "./pages/AddFood";
import AllBestFoodCardDetails from "./components/AllBestFoodCardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "menu", element: <Menu /> },
      { path: "reservation", element: <Reservation /> },
      { path: "order", element: <Order /> },
      { path: "cart", element: <Cart /> },
      {
        path: "addfood",
        element: (
          <PrivateRoutes>
            <AddFood />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      { path: "cookie-policy", element: <CookiePolicy /> },
      { path: "terms", element: <TermsOfUse /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "best-food", element: <AllBestFoodCard /> },
      { path: "best-food/:id", element: <AllBestFoodCardDetails />,loader:({params})=>fetch(`http://localhost:3000/bestfood/${params.id}`) },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
