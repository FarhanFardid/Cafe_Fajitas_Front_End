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
import PrivateRoutes from "./PrivateRoutes";
import ChefRecipe from "../Pages/ChefRecipe";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () =>fetch('https://chef-recipe-hunter-server-xi.vercel.app/chefs')
                
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
                path:'recipe/:id',
                element:<PrivateRoutes><ChefRecipe></ChefRecipe></PrivateRoutes>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-xi.vercel.app/chefs/${params.id}`)
            },
            {
                path:'*',
                element:<Error></Error>
            }

        ]
    }
])

export default router;