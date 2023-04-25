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
import ArticleDetails from "../../components/Blog/ArticleHeader/ArticleDetails";
import WhatDoesFitnessMean from "../../components/Blog/ArticleHeader/WhatDoesFitnessMean";
import Return from './../../components/Return/Return';
import TermsAndConditions from './../../components/TermsAndConditions/TermsAndConditions';
import Privacy from './../../components/Privacy/Privacy';
import Contact from './../../components/Contact/Contact';
import PersonalLayout from './../../Personal/PersonalLayout';
import Personal from './../../Personal/Personal/Personal';
import MyStory from "../../Personal/Personal/MyStory/MyStory";



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
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/return",
        element: <Return></Return>,
      },

      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: '/what-does-fitness-mean',
        element: <WhatDoesFitnessMean></WhatDoesFitnessMean>,
      },


      {
        path: '/article/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader: ({ params }) => fetch(`http://localhost:4000/article/${params.id}`)
      },
    ]
  },

  {
    path: "/personal",
    element: <PersonalLayout></PersonalLayout>,
    children: [
      {
        path: "/personal",
        element: <Personal></Personal>,
      },
    ],
  },

  {
    path: "/",
    element: <PersonalLayout></PersonalLayout>,
    children: [
      {
        path: "/myStory",
        element: <MyStory></MyStory>,
      },
    ],
  },

 

]);

export default router;