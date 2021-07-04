import React from 'react';
import './Footer.css'

function Footer (){
    return (
        <div className="m-f-container">
            <div className="main-footer-container">

<div className="first-footer-container">
    <div className="first-footer">
        <div className="link-container">
            <h4 className="list-heading">POPULAR LOCATIONS</h4>
            <ul className="links">
                <li><a href="#" className="link">Kolkata</a></li>
                <li><a href="#" className="link">Mumbai</a></li>
                <li><a href="#" className="link">Chennai</a></li>
                <li><a href="#" className="link">Pune</a></li>
            </ul>
        </div>
        <div className="link-container">
            <h4 className="list-heading">TRENDING LOCATIONS</h4>
            <ul className="links">
                <li><a href="#" className="link">Bhubaneswar</a></li>
                <li><a href="#" className="link">Hyderabad</a></li>
                <li><a href="#" className="link">Chandigarh</a></li>
                <li><a href="#" className="link">Nashik</a></li>
            </ul>
        </div>
        <div className="link-container">
            <h4 className="list-heading">ABOUT US</h4>
            <ul className="links">
                <li><a href="#" className="link">About OLX group</a></li>
                <li><a href="#" className="link">Careers</a></li>
                <li><a href="#" className="link">Contact Us</a></li>
                <li><a href="#" className="link">OLX people</a></li>
                <li><a href="#" className="link">Waah Jobs</a></li>
            </ul>
        </div>
        <div className="link-container">
            <h4 className="list-heading">OLX</h4>
            <ul className="links">
                <li><a href="#" className="link">Help</a></li>
                <li><a href="#" className="link">Sitemap</a></li>
                <li><a href="#" className="link">Legal & Privacy information</a></li>
            </ul>
        </div>
        <div className="link-container">
            <h4 className="list-heading">FOLLOW US</h4>
            <div className="s-meadia">

            </div>                        
        </div>
    </div>
</div>

<div className="second-footer-container">
    <div className="second-footer">
        <p className = "para1"><span>Other countries </span>Pakisthan-South africa-Indonasia</p>
        <p className = "para2"><span>Free classifides in India   </span>2006-2021 OLX</p>
    </div>
</div>

</div>
        </div>
        

    )
}

export default Footer;
