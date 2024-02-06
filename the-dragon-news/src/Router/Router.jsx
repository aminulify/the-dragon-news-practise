import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main/Main';
import Home from '../Home/Home';
import Category from '../Category/Category';
import NewsLayout from '../layout/Main/NewsLayout';
import News from '../layout/Main/News';
import LoginLayout from '../LoginLayout/LoginLayout';
import Login from '../LoginLayout/Login';
import Register from '../LoginLayout/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Terms from '../Shared/Terms/Terms';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/categories/0`)
            },
            
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [

            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path:'/user',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    }
])
export default router;