import React, { useState } from 'react';

const ArticleSlicer = ({children}) => {
    const [collapsed, setCollapsed] = useState(true); 
    return (
        <>
            {
                collapsed &&
                <span>{children.slice(0, 200)}... <br /> <span className='cursor-pointer underline text-blue-600' onClick={()=> setCollapsed(!collapsed)}>Read More</span> </span>             
            }
            {
                collapsed ||
                <span className='text-blogfull'>{children} <br /> <span className='cursor-pointer underline text-blue-600' onClick={()=> setCollapsed(!collapsed)}>Show Less</span></span>
            }
        </>
    );
};

export default ArticleSlicer;