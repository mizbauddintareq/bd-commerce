import React from 'react';
import logo from './logo.png'



const Navbar = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <input type="search" name="" id="" />
                <select name="" id=""></select>
                <input type="submit" value="" />
            </div>
            <div>
                <i class="fas fa-phone-alt"></i>
                <div>
                    <h6>CALL US NOW</h6>
                    <h5>+123 4567 890</h5>
                </div>
            </div>
            <div>
                <i class="far fa-user"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-shopping-bag"><i class="fas fa-angle-down"></i></i>
            </div>
        </div>
    );
};

export default Navbar;