import React, { useEffect } from 'react';
// import Greeting from '../components/greeting/greeting';

const Homepage = () => {

    return (
    <div className="home">
        {/* <Greeting/> */}
        <div className="top-img-frame">
            <img className="top-img" src="/petday_img/photo10.jpeg"/>
            <img className="petday-logo" src="/petday_img/petday_logo_small.png" alt="petdaylogo"/>
            
        </div>

    </div>
    )
};

export default Homepage;