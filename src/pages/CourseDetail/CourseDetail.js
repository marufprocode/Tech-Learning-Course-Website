import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
    return (
        <div>
            <h1>This is Course Details Page</h1>
            <Link to="/checkout">
                <button className='btn btn-info'>Get Preium Acceess</button>
            </Link>
        </div>
    );
};

export default CourseDetail;