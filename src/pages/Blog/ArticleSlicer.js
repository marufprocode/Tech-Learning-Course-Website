import React, { useState } from 'react';

const ArticleSlicer = ({children}) => {
    const [collapsed, setCollapsed] = useState(true); 
    return (
        <div>
            {
                collapsed &&
                <p>{children.slice(0, 200)}... <br /> <span className='cursor-pointer underline text-blue-600' onClick={()=> setCollapsed(!collapsed)}>Read More</span> </p>             
            }
            {
                collapsed ||
                <p className='text-blogfull'>{children} <br /> <span className='cursor-pointer underline text-blue-600' onClick={()=> setCollapsed(!collapsed)}>Show Less</span></p>
            }
        </div>
    );
};

export default ArticleSlicer;