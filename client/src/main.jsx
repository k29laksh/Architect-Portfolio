import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Projects from "./pages/Projects.jsx";
import Home from "./pages/Home.jsx";
import SingleProject from "./pages/SingleProject.jsx";


// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
     


      <Route path="/" element={<Home/>}/>
      <Route path="/allprojects" element={<Projects/>}/>
      <Route path="/project" element={<SingleProject/>}/>

      
     
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
 
);
