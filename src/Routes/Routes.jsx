import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import { Children } from "react";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import Review from "../Pages/Review";
import Gadget from "../Components/Gadget";
import Phones from "../Components/Phones";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
            // index:true,
            path:'/',
            element:<Home/>,
            loader:(()=>fetch('/productsData.json')),
            children:[
                {
                    path:'allgadgets',
                    element:<Gadget/>,
                },
                {
                    path:'phones',
                    element:<Phones/>
                }
            ]
            
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/statistics',
                element:<Statistics/>
            },
            {
                path:'/review',
                element:<Review/>
            }
        ]   
    },
    {
        path:'/home',
        element:<Home/>
    }
    
])