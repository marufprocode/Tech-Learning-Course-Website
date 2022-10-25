import React from 'react';
import { Link } from 'react-router-dom';

const NavLi = () => {
    return (
        <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="faq">Faq</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </>
    );
};

export default NavLi;