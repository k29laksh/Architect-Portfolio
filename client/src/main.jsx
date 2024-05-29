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
import LoginPage from "./pages/auth/Login.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";


// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      
      <Route path="/admin" element={<LoginPage/>}/>
      <Route path="/admindashboard" element={<Dashboard/>}/>
     


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
