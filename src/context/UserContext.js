import React, { createContext } from 'react';

export const sharedContext = createContext();

const UserContext = ({children}) => {


    const contextData = {name: 'Maruf'}
    return (
        <sharedContext.Provider value={contextData}>
            {children}
        </sharedContext.Provider>
    );
};

export default UserContext;