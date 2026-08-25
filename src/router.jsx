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
import FAQ from "./pages/FAQ";
import Categories from "./pages/Categories";
import BestFoods from "./pages/CategoriesPages/BestFoods";
import BBQ from "./pages/CategoriesPages/BBQ";
import Breads from "./pages/CategoriesPages/Breads";
import Burger from "./pages/CategoriesPages/Burger";
import Chocolate from "./pages/CategoriesPages/Chocolate";
import Desserts from "./pages/CategoriesPages/Desserts";
import Drinks from "./pages/CategoriesPages/Drinks";
import FrideChicken from "./pages/CategoriesPages/FrideChicken";
import IceCream from "./pages/CategoriesPages/IceCream";
import OurFood from "./pages/CategoriesPages/OurFood";
import Pizza from "./pages/CategoriesPages/Pizza";
import IndianFood from "./pages/CategoriesPages/IndianFood";
import Sandwiches from "./pages/CategoriesPages/Sandwiches";
import Sausages from "./pages/CategoriesPages/Sausages";
import Steaks from "./pages/CategoriesPages/Steaks";
import BanglaFood from "./pages/CategoriesPages/BanglaFood";

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
      { path: "about-us", element: <AboutUs /> },
      {
        path: "contact",
        element: <Contact />,
      },
      { path: "cookie-policy", element: <CookiePolicy /> },
      { path: "terms", element: <TermsOfUse /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "best-food", element: <AllBestFoodCard /> },
      {
        path: "best-food/:id",
        element: <AllBestFoodCardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bestfood/${params.id}`),
      },
      { path: "faq", element: <FAQ /> },
      { path: "categories", element: <Categories /> },

      /* categories pages */
      { path: "categories/ourbestfood", element: <BestFoods /> },
      { path: "categories/bbq", element: <BBQ /> },
      { path: "categories/breads", element: <Breads /> },
      { path: "categories/burger", element: <Burger /> },
      { path: "categories/desserts", element: <Desserts /> },
      { path: "categories/drinks", element: <Drinks /> },
      { path: "categories/fridechicken", element: <FrideChicken /> },
      { path: "categories/ourfood", element: <OurFood /> },
      { path: "categories/pizza", element: <Pizza /> },
      { path: "categories/indianfood", element: <IndianFood /> },
      { path: "categories/sandwiches", element: <Sandwiches /> },
      { path: "categories/sausages", element: <Sausages /> },
      { path: "categories/steaks", element: <Steaks /> },
      { path: "categories/banglafood", element: <BanglaFood /> },
      { path: "categories/icecream", element: <IceCream /> },
      { path: "categories/chocolate", element: <Chocolate /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
