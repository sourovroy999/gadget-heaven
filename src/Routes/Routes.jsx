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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // index:true,
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            loader: () => fetch("/productsData.json"),
            element: <Gadgets />,
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
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
