import React, {useState, useContext, useEffect} from 'react';
import { firebaseContext } from '../../Contexts/Context';
import { PostViewContext } from '../../Contexts/ViewContext';
import { useHistory } from 'react-router';
import Product from '../Product/Product';
import './Productgrid.css';

function Productgrid(props){

    const {Firebase} = useContext(firebaseContext);
    const [gridProduct, setGridProduct] = useState([]);
    const {setpostDet} = useContext(PostViewContext)

    const history = useHistory();

    useEffect(() => {
        Firebase.firestore().collection('products').get().then((snapshot)=>{
            const allPost = snapshot.docs.map(product =>{
                return {
                    ...product.data(),
                    id:product.id
                }
            })
            setGridProduct(allPost);
        })
    }, [])


    let cats = props.cat;
    console.log(typeof(cats))

    // console.log(gridProduct)
    let spec = gridProduct.filter(obj=>obj.category === cats)
    console.log(cats)

    if(props.cat){
        console.log(spec);
    }
        

    

    const viewHandler = (product)=>{
        setpostDet(product)
        history.push('/view')
    }

    return(
        <div className="p-g-container">
            <div className="ttle">
                <h3 className="grid-ttle">{cats? cats :"Fresh recomendations"}</h3>
            </div>
            <div className="product-grid-container">
                <div className="Grid">
                    { 
                    
                    props.cat ? 
                    
                    spec.map(product=>{
                            return(
                                <div onClick={()=>viewHandler(product)} className="grid-card">
                                    <Product img={product.url} 
                                             img={product.url} 
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
                        : ""
                    }

                    {
                        !props.cat ?
                        gridProduct.map(product=>{
                            return(
                                <div onClick={()=>viewHandler(product)} className="grid-card">
                                    <Product img={product.url} 
                                             img={product.url} 
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
                        
                        : ""
                    }
                </div>
            </div>
            <div className="m-btn">
                <button className="more-button">Load More</button>
            </div>
        </div>
        
    )
}

export default Productgrid;