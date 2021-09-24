import React from 'react';
import './Landing.css';
import appleStore from '../../images/appstore2.png';
import gooogleStore from '../../images/playstore.png';

const FooterBottom = () => {
    return (
        <div className="container-fluid footerBtm-part">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-2">
                    <div className="fb-title">
                        {/* <span>COntact Us</span> */}
                                <h5>CONTACT Us</h5>
                            </div>
                        <div className="fb-1">
                            
                        <ul className="cmn-fb-list">
                            <li><a href="#">+44 345 678 903
                            </a> </li>
                            <li><a href="#">adobexd@mail.com
                            </a> </li>
                            <li><a href="#">Find a Store</a> </li>
                        </ul>
                        </div>
                        

                    </div>
                    <div className="col-md-3">
                    <div className="fb-title">
                                <h5>SERVICES</h5>
                            </div>
                        <div className="fb-2">
                        
                        <ul className="cmn-fb-list">
                            <li><a href="#">Contact Us

                            </a> </li>
                            <li><a href="#">Ordering & Payment

                            </a> </li>
                            <li><a href="#">Shipping</a> </li>
                            <li><a href="#">Returns</a> </li>
                            <li><a href="#">FAQ</a> </li>
                            <li><a href="#">Sizing Guide</a> </li>
                        </ul>
                        </div>

                    </div>
                    <div className="col-md-3">
                    <div className="fb-title">
                                <h5>INFORMATION</h5>
                            </div>
                    <div className="fb-3">
                    
                        <ul className="cmn-fb-list">
                            <li><a href="#">About Adobe XD Kit


                            </a> </li>
                            <li><a href="#">Work With US


                            </a> </li>
                            <li><a href="#">Privacy Policy</a> </li>
                            <li><a href="#">Terms & Conditions</a> </li>
                            <li><a href="#">Press Enquiries</a> </li>
                            {/* <li><a href="#">Sizing Guide</a> </li> */}
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="fb-4">
                        <h1>Trade Anywhere, Anytime</h1>
                        <a href="">
                        <img src={appleStore} className="apple-icn" alt="" />

                        </a>
                        <a href="">
                        <img src={gooogleStore} alt="" />

                        </a>
                        </div>
                        

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterBottom;