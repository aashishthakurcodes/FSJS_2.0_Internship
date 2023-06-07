import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Conatiner from './Container/Conatiner';
import About from './About/About';


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Conatiner/>
      },
      {
        path:'/about',
        element:<About/>
      },
      
    ]
   
  },
  
     
 
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);