import React, { useContext, useRef } from 'react';
import { sharedContext } from '../../context/UserContext';

const ProfileInfo = () => {
    const {user} = useContext(sharedContext);
    const nameRef = useRef(user?.displayName);
    return (
        <div>
           <h3 className='font-semibold text-lg'>Full Name:</h3>
           <p className='mb-3 text-lg' ref={nameRef}>{user? user?.displayName:'N/A'}</p> 
           <h3 className='font-semibold text-lg'>Eamil Address:</h3>
           <p className='mb-3 text-lg'>{user? user?.email:'Not Available'}</p> 
           <h3 className='font-semibold text-lg'>Eamil Status:</h3>
           <p className='mb-3 text-lg'>{user?.emailVerified? "Verified":"Not Verified"}</p> 
           <h3 className='font-semibold text-lg'>Phone:</h3>
           <p className='mb-3 text-lg'>{user?.phoneNumber? user?.phoneNumber:"Not Available"}</p> 
        </div>
    );
};

export default ProfileInfo;