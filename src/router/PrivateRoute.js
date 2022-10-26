import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { sharedContext } from '../context/UserContext';
import { Blocks } from  'react-loader-spinner'


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(sharedContext);
    const location = useLocation();
    if(loading) return (
        <div className='flex justify-center min-h-screen items-center'>
            <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            />
        </div>
    ) 
    if (user && user.uid) return children;
    return <Navigate to='/login' state={{ from: location }} replace/>
};

export default PrivateRoute;