import React from 'react'
import Banner from '../../Components/Banner/Banner';
import Productsscroll from '../../Components/Productsscroll/Productsscroll';
import Heading from '../../Components/Heading/Heading';
import Productgrid from '../../Components/Productgrid/Productgrid';
import Footer from '../../Components/Footer/Footer';
import CategoryLinks from '../../Components/CategoryLinks/CategoryLinks';
import Header1 from '../../Components/Header1/Header1';
import './Home.css'

function homePage(){
    return (
        <div className="home-page">
        
            <Header1 />
            <CategoryLinks ></CategoryLinks>
            <Banner />
            <Heading />
            <Productsscroll />
            <Productgrid />
            <Footer />
        
        </div>
    )
}

export default homePage;