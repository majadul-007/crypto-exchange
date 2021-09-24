import React from 'react';
import './Landing.css';
import laptop  from '../../images/Laptop.png';
import dashboard from '../../images/dashboard.png';
// import bannerImg from '../../images/navbar-img.png' 
const Banner = () => {
    return (
        <div className='container-xxl banner-part'>
            
                <div className="row">
                    <div className="col-md-6 banner-head">
                        <h1>Buy & sell Crypto instantly</h1>
                        <p>The most trusted cryptocurrency trading platform</p>
                        <br />
                        <button className="btn b-1">SIGN IN</button>
                        <button className="btn b-2">SIGN UP</button>
                    </div>
                    <div className="col-md-6 banner-img">
                    <img src={laptop} alt="" />

                    <div className="dash-img">
                        <img src={dashboard} alt="" />
                    </div>


                    </div>
                </div>
            </div>
            
        
    );
}; 

export default Banner;