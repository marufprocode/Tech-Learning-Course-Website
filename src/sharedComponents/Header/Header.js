import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { sharedContext } from "../../context/UserContext";
import Hamburger from "./Hamburger";
import NavLi from "./NavLi";
import SignUpLoginLink from "./SignUpLoginLink";
import ThemeSwap from "./ThemeSwap";
import brandImg from '../../Assets/Brands/LogoPrimary.png'


const Header = () => {
  const {user, userSignOut} = useContext(sharedContext);
  return (
    <div>
      <div className="navbar bg-emerald-100 dark:bg-gray-900 dark:text-white border-b px-5 md:px-8">
        <div className="flex-1">
          <Link to="/#" className="btn bg-sky-300 hover:bg-sky-400 border-0 dark:bg-slate-700">
            <img src={brandImg} alt="brandImage" className="h-[30px]"/>
          </Link>
        </div>
        <div className="flex-none gap-2 hidden md:flex">
            <ul className="menu md:menu-horizontal p-0">
          <NavLi />
            </ul>
        </div>
        <div className="flex-none gap-2 hidden md:flex mt-2 ml-3 me-1">
          <ThemeSwap />
        </div>
        <div className="flex-none gap-2 mx-3">
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <Hamburger/>
            </label>
            <ul tabIndex={0}
              className="mt-3 p-2 dark:bg-gray-900 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li className="md:hidden">
                  <div className="flex self-end"><ThemeSwap/></div>
                </li>
                <div className={`flex w-full justify-center mb-2 ${user? 'hidden':'md:flex'}`} /* className="" */><SignUpLoginLink/></div>
                <NavLi/>
            </ul>
          </div>
        </div>
        <div className={`flex-none gap-2 ${user? 'flex':'hidden'}`}>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-success hover:border-gray-300 hover:border-2" data-tip={user?.displayName}>
              <div className="w-11 rounded-full">
                <img src={user?.photoURL} alt="iamge" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 dark:bg-gray-900 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="justify-between font-semibold text-purple-700 text-left">
                  {user?.displayName} 
                  <span className="badge">Welcome</span>
                </button>
              </li>
              <li>
                <Link to="/profile">Edit Profile</Link>
              </li>
              <li>
                <button onClick={userSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={`hidden flex-none gap-2 ${user? 'hidden':'md:flex'}`}>
          <SignUpLoginLink/>
        </div>
      </div>
    </div>
  );
};

export default Header;
