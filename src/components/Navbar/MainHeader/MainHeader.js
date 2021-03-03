import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className="container ">
            <div className="text-center main-header d-flex flex-column justify-content-center align-items-center">
                <h1>Niche <span className="text-danger">WordPress</span> Themes & Plugins</h1>
                <h6>Exclusive Design . Incredible Functionality . Dedicated Support</h6>
            </div>
            <div className="d-flex justify-content-center">
                <ul className="services">
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MainHeader;