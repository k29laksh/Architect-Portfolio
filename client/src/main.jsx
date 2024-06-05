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
import LoginPage from "./pages/admin/auth/Login.jsx";
import ManageCategory from "./pages/admin/category/ManageCategory.jsx";
import ManageProject from "./pages/admin/project/ManageProject.jsx";
import { Provider } from 'react-redux'
import store from "./redux/store.js";// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      
      <Route path="/admin" element={<LoginPage/>}/>
      <Route path="/managecategory" element={<ManageCategory/>}/>
      <Route path="/manageprojects" element={<ManageProject/>}/>
     


      <Route path="/" element={<Home/>}/>
      <Route path="/allprojects" element={<Projects/>}/>
      <Route path="/project" element={<SingleProject/>}/>

      
     
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
<Provider store={store}>
<RouterProvider router={router} />

</Provider> 
);
