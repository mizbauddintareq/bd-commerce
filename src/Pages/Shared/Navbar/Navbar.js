import React from 'react';
import logo from './logo.png'
import 'animate.css';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='container mb-5'>
            
            {/* header  */}
            
            <div className='d-flex justify-content-around align-items-center mt-4'>
                <div>
                    <img className='img-fluid w-50' src={logo} alt="" />
                </div>

                <div className='search'>
                    <input style={{ backgroundColor:'#f4f4f4', marginRight: '1px', width: '300px' }} className='rounded-end red-input rounded-pill border border-1 p-2 ps-3' placeholder='Search...' type="search" name="" id="search-bar" />
                    <p id='categories' style={{ backgroundColor: '#f4f4f4', display: 'inline', padding: '9.5px' }} className='border border-1'>All Categories <i class="fas fa-angle-down"></i></p>
                    <input style={{backgroundColor:"#f4f4f4"}} type="submit" className=' px-4 py-2 rounded-start rounded-pill border border-1 ' value="🔎︎" />
                </div>

                <div className='d-flex'>
                    <h1 className=' me-2 text-primary inline animate__animated animate__shakeX animate__repeat-3 phone '>🕻</h1>
                    <div>
                        <h5 style={{ fontSize: '14px' }} className='text-secondary '> CALL US NOW</h5>
                        <h5 style={{ fontSize: '18px' }} className=''>+123 4567 890</h5>
                    </div>
                </div>

                <div>
                    <i className="far fa-user m-3 fs-5 p-2 user-icon rounded-circle"></i>
                    <i className="far fa-heart m-3 fs-5 p-2 rounded-circle favorite"></i>
                    <i className="fas fa-shopping-bag fs-5 m-3 cart"><span className='rounded-circle fs-6 cart-number'>1</span><i class="fas fa-angle-down ms-2"></i></i>
                </div>
            </div>

            {/* navmenu */}

            <div className='d-flex justify-content-between mt-4 mx-5 border-top border-2'>
                <div className='d-flex'>
                    <Link to='/' className='navlink'>
                        <h6 className='mx-4 fw-medium nav-menu pt-3'>HOME</h6>
                    </Link>
                    <Link to='/categories' className='navlink'>
                        <h6 className='mx-4 fw-medium nav-menu pt-3'>CATEGORIES<i class="fas fa-angle-down text-secondary"></i></h6>
                    </Link>
                    <Link to='/blog' className='navlink'>
                        <h6 className='mx-4 fw-medium nav-menu pt-3'>BLOG</h6>
                    </Link>
                    <Link to='/about' className='navlink'>
                        <h6 className='mx-4 fw-medium nav-menu pt-3'>ABOUT US</h6>
                    </Link>
                </div>

                <div>
                    <h6 style={{color:'darkorchid', cursor:'pointer'}} className='fw-medium me-5 pt-3'>SPECIAL OFFER !</h6>
                </div>

            </div>
        </div>
    );
};

export default Navbar;