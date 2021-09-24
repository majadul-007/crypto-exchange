import React from 'react';
import './Landing.css';
import coin1 from '../../images/c-1.png';
import coin2 from '../../images/c-2.png';
import coin3 from '../../images/c-3.png';
import coin4 from '../../images/c-4.png';

const FooterTop = () => {
    return (
        <div className="container-fluid footerTop-part">
            <div className="row">
                <div className="col-md-4 img-part-1">

                    <img src={coin1} alt=""  className="coin-img1"/>
                    <img src={coin2} alt="" className="coin-img2" />

                </div>
                <div className="col-md-4">
                    <div className="register-part">
                    <h1>Start trading now</h1>
                     <div className="ft-btn">
                     <button className="btn rgstr-btn">Regsiter Now</button>
                    <button className="btn trade-btn">Trade Now</button>
                     </div>
                   

                    </div>
                    

                </div>
                <div className="col-md-3">
                    <div className="coin-part2">
                    <img src={coin3} alt="" className="coin-img3" />
                <img src={coin4} alt=""  className="coin-img4"/>

                    </div>
               

                </div>
            </div>
            
        </div>
    );
};

export default FooterTop;