import React, { useContext, useState } from "react";
import { sharedContext } from "../../context/UserContext";
import ProfileEdit from "./ProfileEdit";
import ProfileInfo from "./ProfileInfo";
import { Blocks } from  'react-loader-spinner'

const Profile = () => {
  const [isedit, setIsEdit] = useState(false);
  const {user, loading}= useContext(sharedContext);
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
  );
  return (
    <div className="container border min-h-screen mx-auto flex justify-center">
      <div className="border m-5 md:my-10 p-10 rounded-lg min-w-[80%] font-Paytone" style={{background:'radial-gradient(circle, rgba(174,238,189,1) 0%, rgba(148,187,233,1) 100%)'}}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <button className="text-red-600 font-semibold" onClick={()=> setIsEdit(!isedit)}>Edit Profile</button>
        </div>
        <hr className="my-3 border-1 border-teal-600" />
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-12 md:col-span-4 flex justify-center">
            <img
              src={user?.photoURL? user?.photoURL:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="userImage"
              className="w-[250px] h-[250px]"
            />
          </div>
          <div className="col-span-12 md:col-span-8 pl-0 md:pl-10 my-auto mt-5 md:mt-0">
            {/* <ProfileInfo /> */}
            {/* <ProfileEdit/> */}
            {
              isedit? <ProfileEdit setIsEdit={setIsEdit}/>:<ProfileInfo/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
