import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Main from './../../Layout/Main';
import About from './../../components/About/About';
import Product from "../../components/Product/Product";
import Payment from "../../components/Payment/Payment";
import Blog from "../../components/Blog/Blog";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import PrivateRoute from "./PrivateRoute";



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
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  }
])

export default router;