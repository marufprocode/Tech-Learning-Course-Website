import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import NavLi from "./NavLi";
import SignUpLoginLink from "./SignUpLoginLink";
import ThemeSwap from "./ThemeSwap";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-emerald-100 border-b">
        <div className="flex-1">
          <Link to="/#" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="flex-none gap-2 hidden md:flex">
            <ul className="menu md:menu-horizontal p-0">
          <NavLi />
            </ul>
        </div>
        <div className="flex-none gap-2 flex mt-2 ml-3 me-1">
          <ThemeSwap />
        </div>
        <div className="flex-none gap-2 mx-3">
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <Hamburger/>
            </label>
            <ul tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <div className="flex w-full justify-center mb-2"><SignUpLoginLink/></div>
                <NavLi/>
            </ul>
          </div>
        </div>
        <div className="flex-none gap-2 hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="iamge" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/#" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/#">Settings</Link>
              </li>
              <li>
                <Link to="/#">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-none gap-2">
          <SignUpLoginLink/>
        </div>
      </div>
    </div>
  );
};

export default Header;
