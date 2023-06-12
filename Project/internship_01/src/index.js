// import React, { Children } from 'react';
import Crausal from "./Crausel/Crausal";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conatiner from "./Container/Conatiner";
import About from "./About/About";
import RouterError from "./Shimmer/Routererror";
import Contact from "./Contactus/Contact";
import Moreinfo from "./MoreInfo/Moreinfo";


const Home=()=>{
  return(
    <>
    <Crausal/>
    <Conatiner/>,
    
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/moreinfo/:id",
        element:<Moreinfo/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
