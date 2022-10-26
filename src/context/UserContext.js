import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.init'

const auth=getAuth(app);

export const sharedContext = createContext();

const UserContext = ({children}) => {
    const [loading, setLoading]= useState(true);


    const contextData = {name: 'Maruf'}
    return (
        <sharedContext.Provider value={contextData}>
            {children}
        </sharedContext.Provider>
    );
};

export default UserContext;