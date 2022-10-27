import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sharedContext } from '../../context/UserContext';

const ProfileEdit = ({setIsEdit}) => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [showCurrPass, setShowCurrPass] = useState(false);
    const {updateUserProfile, user} = useContext(sharedContext);
    const nameRef = useRef(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        /* const name = nameRef.current.value;
        const photoURL = photoURLRef.current.value; */
        const name = e.target.name.value;
        const photoURL = e.target.photourl.value;
        updateUserProfile(name, photoURL);
        setIsEdit(false);
    }
    

    return (
        <div>
            <form
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
            onSubmit={handleUpdateProfile}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  ref={nameRef}
                  defaultValue={user?.displayName}
                  placeholder="Your Name..."
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              <div>
                <label htmlFor="photoURL" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photourl"
                  ref={photoURLRef}
                  defaultValue={user?.photoURL}
                  placeholder="Photo URL..."
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                    disabled
                  type="email"
                  name="email"
                  placeholder={user?.email}
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              <div className='flex justify-end'><button className='btn btn-info text-white font-poppins hover:bg-sky-500'>Update Profile</button></div>
            </div>
          </form>
          {/* 2nd form  */}
          <form>
            <h3 className='my-3 text-lg'>Want To Update Your Password? </h3>
            {/* current password field  */}
          <div className="relative">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Current Password
                  </label>
                </div>
                <input
                    required
                  type={showCurrPass? "text":"password"}
                  name="currentpassword"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
                <div className="absolute right-4 bottom-3 cursor-pointer" onClick={()=>setShowCurrPass(!showCurrPass)}>{showCurrPass? <FaEyeSlash/>:<FaEye/>}</div>
            </div>

            {/* New Password Field  */}
          <div className="relative">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                    required
                  type={showPass? "text":"password"}
                  name="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
                <div className="absolute right-4 bottom-3 cursor-pointer" onClick={()=>setShowPass(!showPass)}>{showPass? <FaEyeSlash/>:<FaEye/>}</div>
            </div>
            {/* Retype New Password Field  */}
              <div className="relative">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm mt-2">
                    Retype New Password
                  </label>
                </div>
                <input
                    required
                  type={showConfirmPass? "text":"password"}
                  name="confirmpass"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
                <div className="absolute right-4 bottom-3 cursor-pointer" onClick={()=>setShowConfirmPass(!showConfirmPass)}>{showConfirmPass? <FaEyeSlash/>:<FaEye/>}</div>
              </div>
              <div className='flex justify-end'><button className='btn btn-error text-white font-poppins hover:bg-red-500 mt-3'>Update Password</button></div>
          </form>
        </div>
    );
};

export default ProfileEdit;