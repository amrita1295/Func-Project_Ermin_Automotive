import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Main from './../../Layout/Main';
import About from './../../components/About/About';
import Product from "../../components/Product/Product";
import Blog from "../../components/Blog/Blog";
import SignIn from "../../components/SignIn/SignIn";
import Register from "../../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BuyNow from "../../components/Product/BuyNow/BuyNow";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/product',
        element: <Product></Product>,
      },
      {
        path: '/payment',
        element: <PrivateRoute><BuyNow></BuyNow></PrivateRoute>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <SignIn></SignIn>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  }
])

export default router;