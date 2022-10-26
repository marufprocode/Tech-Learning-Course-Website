import React, { useEffect, useState } from 'react';

const Home = () => {
    const [dataa, setData] = useState(null);
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=> setData(data));
    },[])
    console.log(dataa?.shortdes);
    return (
        <div className='min-h-screen'>
            
        </div>
    );
};

export default Home;