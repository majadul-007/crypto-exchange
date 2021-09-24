import React from 'react';
import appleStore from '../../images/appstore2.png';
import gooogleStore from '../../images/playstore.png';


const Apps = () => {
    return (
        <div className="container-fluid apps-part">
            <div className="cotainer-xxl">
                <div className="row">

               
                <div className="col-md-8">
                    <div className="phone-part1">

                    </div>
                    <div className="phone-part2">

                    </div>

                </div>
                <div className="col-md-4 app-content">

                    <div className="app-line"></div>
                    <h1>Download Project Z</h1>
                    <p className="main-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
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
    );
};

export default Apps;