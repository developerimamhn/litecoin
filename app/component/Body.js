import React from 'react';
import Pageone from './Pageone'; 
import Pagefore from './Pagefore';
import Footer from './Footer';
import Pagefive from './Pagefive';
import PageLogo from './PageLogo';


const Body = () => {
    return (
        <div className='relative overflow-hidden'>
            <PageLogo/>
            <Pagefive/>
            <Pagefore/>
            <Pageone/>
            <Footer/>
        </div>
    );
};

export default Body;