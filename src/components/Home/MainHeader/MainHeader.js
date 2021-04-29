import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className="child-div d-flex align-items-center  justify-content-center">
        <div>
       <div className="container">
       <span style={{fontSize:'60px',color:'white'}} className="text1">Sajjad Hussain</span><br/>
       </div>
       <div className="">
       <p className="text2">Engineer|Programmer|Web Developer........</p>
       </div>
        <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100052330097666"target="_blank">
                <i class="fa fa-2x fa-facebook ml-5"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100052330097666"target="_blank">
                <i class="fa fa-2x fa-twitter ml-5"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100052330097666"target="_blank">
                <i class="fa fa-2x fa-linkedin ml-5"></i>
            </a>
        </div>
        <br/>
       <div>
       <button type="button" className="btn btn-danger danger-button"><a className="download-button"href="">Download Resume</a></button>
       </div>
        </div>
       </div>
    );
};

export default MainHeader;