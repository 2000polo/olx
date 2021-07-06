import React,{useContext, useEffect} from 'react';
import Header1 from '../../Components/Header1/Header1';
import Footer from '../../Components/Footer/Footer';
import CategoryLinks from '../../Components/CategoryLinks/CategoryLinks';
import Heart from '../../Assets/Heart';
import Arrow from '../../Assets/Arrow';
import { PostViewContext } from '../../Contexts/ViewContext'; 
import { BiShareAlt } from 'react-icons/bi'
import { IconContext } from 'react-icons';

import './View.css';
import { useState } from 'react';
import { firebaseContext } from '../../Contexts/Context';


function  View(){

    const {postDet} = useContext(PostViewContext);
    const [userDet, setUserDet] = useState();
    const {Firebase} = useContext(firebaseContext);
    

    // console.log(userid)

    useEffect(() => {
        const {userid} = postDet;
        Firebase.firestore().collection('user').where("id","==",userid?userid:"").get().then((resp)=>{
            resp.forEach(doc=>{
                console.log(doc.data())
                setUserDet(doc.data());
            })
        })
        // return () => {
        //     cleanup
        // }
    }, [])



    console.log(userDet);

    return (
        <div className="viewMainContainer">
            <Header1></Header1>
            <CategoryLinks ></CategoryLinks>

            <div className="view-container">
                <div className="img-desc-detials">
                    <div className="product-image" style={{backgroundImage:`url(${postDet?postDet.url:""})`}} ></div>
                    <div className="detials">
                        <h3 className="detials-heading">
                            Detials
                        </h3>
                        <p className= "dtls">Brand: {postDet?postDet.name:""}</p>
                    </div>
                    <div className="description">
                        <h3 className = "description-heading">Description</h3>
                        <p className="product-description">{postDet.desc}</p>
                    </div>
                </div>

                <div className="price-seller-cards">
                    <div className="price-card">
                        <div className="price-card-header">
                            <h2 className="product-prize">{postDet.price}<span>Rs</span></h2>
                            
                            <div className="price-card-icon">
                                <IconContext.Provider value={{color:"#002f34", size:"25px"}}>
                                    <BiShareAlt/>
                                </IconContext.Provider>
                                <Heart />
                            </div>
                        </div>

                        <div className="prdct-name"><h5>{postDet?postDet.name:""}</h5></div>

                        <div className="place-date">
                            <p className="place">{postDet.location}</p>
                            <p className="price-card-date">{postDet.date}</p>
                        </div>
                    </div>

                    <div className="seller-card">
                        
                            <div>
                            <h3 className="seller-card-heading">Seller Description</h3>

                            <div className="seller-card-profile-section">
                                <div className="dp-seller">
                                    <div className="dp"></div>
                                    
                                    <div className="seller">
                                        <h3 className="seller-name">{userDet?userDet.username:""}</h3>
                                        <p className="seller-data">{userDet?userDet.phonenumber:""}</p>
                                    </div>

                                </div>
                                
                                <div className="arrow-icon">
                                
                                    <Arrow />
                                </div>
                            </div>

                            <div className="seller-card-btn-wrapper">
                                <div className="chat-btn">
                                    <button className="chat-button" >Chat with seller</button>
                                </div>
                                <div className="offer-btn">
                                    <button className="offer-button" >Make an offer</button>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>

            <Footer  />


        </div>
    )
}

export default View;
