import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<Error></Error>
            }

        ]
    }
])

export default router;