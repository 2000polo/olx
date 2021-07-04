import React,{useEffect, useState, useContext} from 'react';
import Product from '../Product/Product';
import './Productsscroll.css';
import {firebaseContext} from '../../Contexts/Context';
import {useHistory} from 'react-router-dom';
import {PostViewContext} from '../../Contexts/ViewContext'

function Productsscroll(){

    const {Firebase} = useContext(firebaseContext);
    const [products, setProducts] = useState([]);

    const { setpostDet } = useContext(PostViewContext);

    const history = useHistory();

    useEffect(() => {
        Firebase.firestore().collection('products').get().then((snapshot)=>{
            const allPosts = snapshot.docs.map((product)=>{
                return {
                    ...product.data(),
                    id:product.id
                }
            })

            // console.log(allPosts);
            setProducts(allPosts);
        })
    }, [])

    // console.log(products)
    const twowheeler = products.filter(product => product.category == "scooter" ||  product.category == "bike");
    console.log(twowheeler)

    const viewHandler = (product)=>{
        
        setpostDet(product)
        history.push('/view')
        // console.log(postDet)
    }

    

    return(
        <div className="scroll-bar-container">
            <div className="scroll-bar">
                {
                    twowheeler.map(product=>{
                        return(
                        <div onClick = {()=>viewHandler(product)} className="card">
                            <Product img={product.url} 
                                     price={product.price}
                                     date={product.createdAt} 
                                     km={product.kilometer} 
                                     name={product.name} 
                                     year={product.year} 
                                     loc={product.location}
                                     product={product}
                                      />
                            
                        </div>
                        )
                    })
                }
                {/* <div className="card">
                    <Product />
                </div>
                <div className="card">
                    <Product />
                </div>
                <div className="card">
                    <Product />
                </div>
                <div className="card">
                    <Product />
                </div>
                <div className="card">
                    <Product />
                </div>
                <div className="card">
                    <Product />
                </div> */}
            </div>
        </div>
    )
}

export default Productsscroll;