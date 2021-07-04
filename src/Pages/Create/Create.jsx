import React,{useState} from 'react'
import { useContext } from 'react';
import Arrow from '../../Assets/Arrow';
import Logo from '../../Assets/Logo';
import {firebaseContext, AuthContext} from '../../Contexts/Context';
import { useHistory } from 'react-router-dom';

import './Create.css';

function Create() {

    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('');
    const [year, setYear] = useState('');
    const [km, setKm] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const {user} = useContext(AuthContext);
    const {Firebase} = useContext(firebaseContext);

    const history = useHistory();

    const date = new Date()


    const postSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(category);
        console.log(year);
        console.log(km);
        console.log(title);
        console.log(desc);
        console.log(price);
        console.log(location);

        Firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
            ref.getDownloadURL().then((url)=>{
                console.log(url);
                Firebase.firestore().collection('products').add({
                    name:title,
                    category:category,
                    year:year,
                    kilometer:km,
                    desc:desc,
                    price:price,
                    location:location,
                    userid:user.uid,
                    url:url,
                    createdAt:date.toDateString()
                })
            })
            history.push('/')
        })
    }


    const backBtnHandler = () =>{
        history.push('/')
    }

    return (
        <div className="create-main-wrapper">
            <nav>
                <div onClick={backBtnHandler} className="back">
                    <Arrow/>
                </div>
                <Logo />
            </nav>

            <section className="create-form-section flex-row">
                <form action="" className="create-form">
                    <div className="create-form-heading flex-col">
                        <h2>POST YOUR ADD</h2>
                        <h4>INCKUDE SOME DETIALS</h4>
                    </div>

                    <div className="b-input-feild flex-col center">
                        <label htmlFor="label">Category*</label>
                        <input type="text" 
                                className="br-input-feild"
                                placeholder="Category"
                                id="category"
                                onChange = {(e)=>{setcategory(e.target.value)}} />
                    </div>
                    <div className="yr-input-feild flex-col center">
                        <label htmlFor="label">Year*</label>
                        <input type="text" 
                                className="y-input-feild"
                                placeholder="Brand name"
                                id="year"
                                onChange={(e)=>{setYear(e.target.value)}} />
                    </div>
                    <div className="yr-input-feild flex-col center">
                        <label htmlFor="label">KM driven*</label>
                        <input type="text" 
                                className="y-input-feild"
                                placeholder="Brand name"
                                id="km"
                                onChange={(e)=>{setKm(e.target.value)}} />
                    </div>
                    <div className="yr-input-feild flex-col center">
                        <label htmlFor="label">Add title*</label>
                        <input type="text" 
                                className="y-input-feild"
                                placeholder="Brand name"
                                id="title"
                                onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div className="post-desc yr-input-feild flex-col center">
                        <label htmlFor="label ">Description</label>
                        <textarea name="desc"
                                  placeholder="brief description about your product"
                                  id="" 
                                  cols="30" 
                                  rows="10"
                                  onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                    </div>
                    <div className="price-location-image ">
                        <div className="p-l-wrapper">
                            <div className="yr-input-feild flex-col center">
                                <label htmlFor="label">Price*</label>
                                <input type="text" 
                                        className="y-input-feild"
                                        placeholder="Price"
                                        id="price"
                                        onChange={(e)=>{setPrice(e.target.value)}} />
                            </div>
                            <div className="yr-input-feild flex-col center">
                                <label htmlFor="label">Location*</label>
                                <input type="text" 
                                        className="y-input-feild"
                                        placeholder="Enter your location"
                                        id="title"
                                        onChange={(e)=>{setLocation(e.target.value)}} />
                            </div>
                            <div className="img-wrapper center">
                                <img src={image?URL.createObjectURL(image):''} alt="post" />
                            </div>
                            <input className ="yr-input-feild center add-image" type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
                        </div>
                       <button className="yr-input-feild center post" onClick = {(e)=>{postSubmitHandler(e)}}>Post</button>
                    </div>
                </form>
            </section>
            
        </div>
    )
}

export default Create
