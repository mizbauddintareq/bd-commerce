import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import CustomerReview from '../CustomerReview/CustomerReview';

const AboutMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default AboutMain;