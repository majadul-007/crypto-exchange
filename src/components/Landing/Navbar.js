import React from 'react';
import './Landing.css';
// import './Testing';


const Navbar = () => {
  return (

    <div className="container-fluid navbar-part">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-xxl">
          <a className="navbar-brand all-links" href="#">Project Z</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto all-links">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">MARKETS</a>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SPOT
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Standard</a></li>
                  
                  <li><a className="dropdown-item" href="#">Advanced</a></li>
                </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">FUTURE</a>
             
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">BUY COIN</a>
                  
                
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SIGN IN</a>
              </li>

              <button className="btn start-btn">GET STARTED</button>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>























  );
};

export default Navbar;