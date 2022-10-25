import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLoginLink = () => {
    return (
        <div className="flex">
            <Link to="/login"><button className="btn btn-sm mr-3 btn-outline btn-info">Login</button></Link>
            <Link to="/register"><button className="btn btn-sm mr-3 btn-primary">Sign Up</button></Link>
        </div>
    );
};

export default SignUpLoginLink;