import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import { router } from './Routes/Routes';



const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <StrictMode>

  <RouterProvider router={router} />
  </StrictMode>

);
