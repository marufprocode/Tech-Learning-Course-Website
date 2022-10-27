import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLi = () => {
    return (
        <>
            <li>
              <NavLink to="/home" className={({isActive})=> isActive? "bg-teal-400":""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({isActive})=> isActive? "bg-teal-400":""}>Courses</NavLink>
            </li>
            <li>
              <NavLink to="faq" className={({isActive})=> isActive? "bg-teal-400":""}>Faq</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={({isActive})=> isActive? "bg-teal-400":""}>Blogs</NavLink>
            </li>
          </>
    );
};

export default NavLi;