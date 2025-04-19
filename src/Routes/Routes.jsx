import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import { Children } from "react";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import Review from "../Pages/Review";
import Gadget from "../Components/Gadget";
import Phones from "../Components/Phones";
import Laptops from "../Components/Laptops";
import Gadgets from "../Components/Gadgets";
import Details from "../Pages/Details";
import Cart from "../Components/Cart";
import WishList from "../Components/WishList";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,

    children: [
      {
        // index:true,
        path: "/",
        element: <Home />,

        children: [
          {
            // index: true,
            path:'/',
            loader: () => fetch("/productsData.json"),
            element: <Gadgets />,
            // children:[
                  
            //         {
            //             path:'/laptops',
            //             element:<Laptops/>
            //         },{
            //             path:'/phones',
            //             element:<Phones/>
            //         }
            //     ] 


          },
          {
            path: "/laptops",
            element: <Laptops />,
          },
          {
            path: "/phones",
            element: <Phones />,
          },
        ],

        // children:[
        //     {
        //         path:'allgadgets',
        //         element:<Gadget/>,
        //     },
        //     {
        //         path:'/laptops',
        //         element:<Laptops/>
        //     },{
        //         path:'/phones',
        //         element:<Phones/>
        //     }
        // ]
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/review",
        element: <Review />,
      },
     {
        path:"details/:product_id",
        element:<Details/>,
        loader:()=>fetch("/productsData.json")
     }
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
