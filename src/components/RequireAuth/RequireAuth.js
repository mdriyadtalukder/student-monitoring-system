import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;