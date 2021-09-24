import React from 'react';
import './Landing.css';
import feature1 from '../../images/f-1.png'
import feature2 from '../../images/f-2.png'
import feature3 from '../../images/f-3.png'
import feature4 from '../../images/f-4.png'
import feature5 from '../../images/f-5.png'
import feature6 from '../../images/f-6.png'
import featureB from '../../images/feature-body.png'

const Feature = () => {
    return (
        <div className="container-fluid">
            <div className="container-xxl feature-part">
                <div className="feature-line"></div>
                <h1 className="feature-title">Why Project Z?</h1>
                <div className="row">
                    <div className="col-md-12">
                    <div className="card-group feature-card">
  <div className="card ">
    <img src={feature1} className="card-img-top feature-img" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Best Security</h5>
      <p className="card-text">We’ve left no stone unturned to make Project Z most secure exchange. We’re investing in regular security audits to ensure a highly secured trading platform.</p>
    </div>
    
  </div>
  <div className="card glow-card">
    <img src={feature2} className="card-img-top" alt="..." />

    <div className="card-body">
      <h5 className="card-title">24/7 Support</h5>
      <p className="card-text">Our support team is available 24/7. We are receptive to your needs and are always available to help you out.</p>
    </div>
    
  </div>
  <div className="card">
    <img src={featureB} className="card-img-top" alt="..." />
    <div className="icn-part">
    <img src={feature3} className="watermark" alt="" />

    </div>
    <div className="card-body">
      <h5 className="card-title">Easy to use</h5>
      <p className="card-text">Purchase cryptos with credit/debit cards. 200+ high-quality currencies and 400+ trading pairs available. One-stop platform to initiate your cryptocurrency investment and management</p>
    </div>
    
  </div>
</div>
<br />
<br />
<div className="card-group">
  <div className="card">
    <img src={featureB} className="card-img-top" alt="..." />
    <div className="icn-part">
    <img src={feature4} className="watermark" alt="" />

    </div>
    <div className="card-body">
      <h5 className="card-title">FAST KYC</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
  <div className="card">
    <img src={featureB} className="card-img-top" alt="..." />
    <div className="icn-part">
    <img src={feature5} className="watermark" alt="" />

    </div>

    <div className="card-body">
      <h5 className="card-title">ACROSS ALL PLATFORMS</h5>
      <p className="card-text">ProjectZ offers a seamless and powerful trading experience across all platforms - on Web, Android & iOS mobile.</p>
    </div>
    
  </div>
  <div className="card">
    <img src={featureB} className="card-img-top" alt="..." />
    <div className="icn-part">
    <img src={feature6} className="watermark" alt="" />

    </div>
    <div className="card-body">
      <h5 className="card-title">FAST TRANSACTIONS</h5>
      <p className="card-text">ProjectZ can handle Millions of transactions. Our system infrastructure can scale up in a few seconds to match surging demand.</p>
    </div>
    
  </div>
</div>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Feature;