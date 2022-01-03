import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../Navbar/logo.png'

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor:'#f4f4f4'}} className="footer-container py-5">
                <Row className="footer-bottom-row container m-auto py-2">
                    <Col className=" d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>
                        <ul className="footer-menu text-white d-flex justify-content-sm-center">
                            <li className='text-dark'>Contact</li>
                            <li className='text-dark'>About</li>
                            <li className='text-dark'>Privacy Policy</li>
                            
                        </ul>
                    </Col>
                    <Col className=" d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>
                        <p className="">© 2021 Minor Hotel. All Rights Reserved</p>
                    </Col>
                </Row>

                {/* ------------- footer top part start ------------- */}
                <Row className="container m-auto  pt-5 pb-1 d-md-flex">
                    <Col className="text-center justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center" xs={12} md={6} lg={4}>
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                </Col>
                    <Col className="d-md-none d-lg-block" xs={12} md={6} lg={4}>
                    <div className="my-sm-5 my-5 my-lg-0 my-md-0 office-hour">
                            <h5 className="text-lg-end p-0 fw-light fs-4">OPEN HOUR</h5>
                            <div className="d-flex justify-content-lg-end text-end justify-content-md-end justify-content-sm-center justify-content-center">
                                <hr className=" w-50 m-1 " />
                            </div>
                            <p className="fw-light text-lg-end hour "> Monday - Thursday / 8:00 - 16:00</p>
                            <p className="fw-light text-lg-end hour"> Friday - Saturday / 8:00 - 16:00</p>
                        </div>
                    </Col>
                    <Col className=" d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center" xs={12} md={6} lg={4}>
                        <div className="contact-info">
                            <h5 className="text-lg-end p-0 fw-light fs-4 ">CONTACT US</h5>
                            <div className="d-flex justify-content-lg-end text-end justify-content-md-center justify-content-sm-center justify-content-center">
                                <hr className="w-75 m-1 " />
                            </div>
                            <p className="fw-light text-lg-end number justify-content-md-end justify-content-sm-center justify-content-center "> <i className="fas fa-map-marker-alt"></i> 30 Hampton Road Southampton</p>
                            <p className="fw-light text-lg-end number justify-content-md-end justify-content-sm-center justify-content-center "> <i className="far fa-envelope-open"></i> info@redonionfood.com</p>
                        </div>
                    </Col>
                </Row>
                {/* ------------- footer top part end --------- */}

                <hr className="container" />

                {/*------------- footer bottom part  start-----------*/}
                <Row className="footer-bottom-row container m-auto py-2 ">
                    <Col className=" d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>
                        <ul className="footer-menu d-flex justify-content-sm-center ">
                            <li className='text-dark'>Contact</li>
                            <li className='text-dark'>About</li>
                            <li className='text-dark'>Privacy Policy</li>
                        </ul>
                    </Col>
                    <Col className=" d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>
                        <p className="">© 2021 Minor Hotel. All Rights Reserved</p>
                    </Col>
                </Row>
                {/* ----------- footer bottom part  end ------------*/}
       
            </div>
        </>
    );
};

export default Footer;