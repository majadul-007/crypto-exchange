import React from 'react';
import './Landing.css';
import btc from '../../images/btc-1.png'

const Body = () => {
    return (
        <div className="container-fluid body-part">

<table className="table">
  <thead>
    {/* <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr> */}
  </thead>
  <tbody>
    <tr className="btc-basic">
      {/* <th scope="row">1</th> */}
      <td><img src={btc} alt="" /> BTC/USDT 46,000 <span className="rate">-9.60%</span> <div className="btc-line"> </div> </td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000 <span className="rate">-9.60%</span> <div className="btc-line"> </div> </td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000 <span className="rate">-9.60%</span> <div className="btc-line"> </div> </td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000 <span className="rate">-9.60%</span> <div className="btc-line"> </div> </td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000 <span className="rate">-9.60%</span> <div className="btc-line"> </div> </td>
      
      {/* <td><img src={btc} alt="" /> BTC/USDT 46,000</td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000</td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000</td>
      <td><img src={btc} alt="" /> BTC/USDT 46,000</td> */}
      
      
      
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>

<div className="container-xxl">
   <div className="body-header">
       <p>
       Project Z Will List Mask Network (MASK)  <span className="header-date">05-25</span>
       <a href="" className="more-details">More</a>                                                                         
       </p>

       
      
   </div>
   <div className="body-table">
       <div className="table-btn ">

   <button className="btn  c-1">Top Coins</button>
   <button className="btn  c-2">Top Gainers</button>
       </div>
   </div>
   <div className="main-table-border">

   
   <div className="main-table">
   <table className="table  table-borderless">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Last Price</th>
      <th scope="col">24h Change</th>
      <th scope="col">Markets</th>
      <th scope="col">Trade</th>
    </tr>
  </thead>
  <tbody>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    <tr>

    <td><img src={btc} alt="" /> BTC/USDT <span className="btc-hide">Bitcoin</span></td>
    <td>45,313.58 USDT</td>
    <td className='change-rate'><p>-9.60%</p></td>
    <td>~</td>
    <td><button className="btn trade-btn">Trade</button></td>

    </tr>
    
    
  </tbody>
  
</table>
<p className="see-more">
  <a href="">See More</a>

</p>


   </div>
   </div>

</div>



            
        </div>
    );
};

export default Body;