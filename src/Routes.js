import { createBrowserRouter } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import Home from "./pages/Home";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login/Login";
import Registre from "./components/Auth/Registre/Registre";
import SingleProduct from "./pages/Product/SingleProduct";
import ProductList from "./pages/Product/ProductList";
import SearchProduct from "./pages/Product/SearchProduct";
import Profile from "./pages/Profile/Profile";
import ProfileLayout from "./layouts/ProfileLayout";
import Orders from "./pages/Profile/Orders";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<AuthenticatedLayout />,
            children:[
                {
                    path:"/profile",
                    element:<ProfileLayout/>,
                    children:[
                       { path:"/profile" ,
                        element:<Profile/>,
                        index:true 
                        }, 
                        {
                            path:"/profile/orders",
                            element:<Orders/>,
                        }
                    ]
                },
                {
                    path:'/',
                    element:<Home />,
                    index:true
                },
                {
                    path:'/product/:id?',
                    element:<SingleProduct/>,
                    index:true

                },
                {
                    path:'/listproduct',
                    element:<ProductList/>,
                    index:true

                },
                {
                    path:'/search-product',
                    element:<SearchProduct/>,
                    index:true

                },
                {
                    path:'/auth',
                    element:<Auth />,
                    
                    children:[
                        {
                            path:'/auth/login',
                            index:true,
                            element:<Login />
                        },
                        {
                            path:'/auth',
                            
                            element:<Login />
                        },
                        {
                            path:'/auth/register',
                            element:<Registre />
                        }
                    ]
                }
            ]
        }
    ]
)

export default router;