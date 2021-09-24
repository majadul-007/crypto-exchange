import React from 'react';
import Apps from './Apps';
import Banner from './Banner';
import Body from './Body';
import Feature from './Feature';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import Footer from './FooterTop';
import Navbar from './Navbar';

const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Banner></Banner>
            <Body></Body>
            <Apps></Apps>
            <Feature></Feature>
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
            {/* <h1>What the hell</h1> */}
        </div>
    );
};

export default Landing;