import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading, setExpLocation } = use(AuthContext)
    const location = useLocation()
    setExpLocation(location.pathname)
    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    } return children;
};

export default PrivateRoute;