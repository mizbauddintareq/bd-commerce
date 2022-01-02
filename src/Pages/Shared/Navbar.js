import React from 'react';
import logo from './logo.png'
import 'animate.css';


const Navbar = () => {
    return (
        <div className='container d-flex justify-content-around align-items-center mt-4'>
            <div>
                <img className='img-fluid w-50 ' src={logo} alt="" />
            </div>
            <div className='search'>
                <input style={{backgroundColor:'rgb(239, 239, 239)', marginRight:'1px', width:'300px'}} className='rounded-end rounded-pill border border-1 p-2 ps-3' placeholder='Search...' type="search" name="" id="" />
                <p id='categories' style={{backgroundColor:'rgb(239, 239, 239)', display:'inline', padding:'9.5px'}} className='border border-1'>All Categories <i class="fas fa-angle-down"></i></p>
                <input type="submit" className=' px-4 py-2 rounded-start rounded-pill border border-1 ' value="🔎︎" />
            </div>
            <div className='d-flex'>
                <h1 className=' me-2 text-primary inline animate__animated animate__shakeX animate__repeat-2'>🕻</h1>
                <div>
                    <h5 style={{ fontSize: '14px' }} className='text-secondary '> CALL US NOW</h5>
                    <h5 style={{ fontSize: '18px' }} className=''>+123 4567 890</h5>
                </div>
            </div>
            <div>
                <i className="far fa-user m-3"></i>
                <i className="far fa-heart m-3"></i>
                <i className="fas fa-shopping-bag m-3"><i class="fas fa-angle-down m-1"></i></i>
            </div>
        </div>
    );
};

export default Navbar;