import React, { useContext } from 'react';
import './PrivateRoute.css';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Snipper from '../Snippers/Snipper';

const PrivateRoute = ({children}) => {
    const {user, snipper} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(snipper){
        return <div className="snipper"><Snipper></Snipper></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/user/login' state={{from: location}} replace></Navigate>
    // replace means client clicked page not save in history 
};

export default PrivateRoute;