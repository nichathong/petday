import React, { useEffect } from 'react';

import GreetingContainer from '../components/greeting/greeting_container';
import Search from '../components/search/search';



const Homepage = () => {

    return (
        <div className="home">
            {/* <div className="top-img-frame">
                <img className="top-img" src="/petday_img/photo10.jpeg"/>
            </div> */}
            
            <div className="main-div">
                <GreetingContainer/>
                <img className="petday-logo" src="/petday_img/petday_logo_small.png" alt="petdaylogo"/>
                <Search /> 

            </div>

        </div>
    )
};

export default Homepage;