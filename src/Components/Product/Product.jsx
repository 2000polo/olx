import React,{useState, useEffect} from 'react';
import Heart from '../../Assets/Heart';
import {firebaseContext} from '../../Contexts/Context';
import './Product.css';

function Product(props) {

    return (
        <div className="product-card-container">
            
            <div className="card" >
                <div className="card-container">
                    <div className="tags">
                        <div className="ftrd">
                        <span>FEATURED</span>
                        </div>
                        <Heart />
                    </div>

                    <div style={{backgroundImage: `url(${props.img})`}}  className="product-img">
                    
                    </div>

                    <div className="img-detials">
                        <h3 className ="price">{props.price}</h3>
                        <p className = "data1">{props.year}-{props.km}</p>
                        <p className = "data2">{props.name}</p>
                        <div className="meta-data">
                            <span className = "m-data">{props.loc}</span>
                            <span className="date">{props.date}</span>
                        </div>
                    
                </div>

                </div>
                
                


            </div>


        </div>
    )
}

export default Product;
