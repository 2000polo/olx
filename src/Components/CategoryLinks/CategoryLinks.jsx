import React,{useState, useContext} from 'react';
import Arrow from "../../Assets/Arrow";
import { CategoryCntxt } from '../../Contexts/CatContext';
import { useHistory } from 'react-router';
import './CategoryLinks.css';

const HeaderLinks = ()=>{

    const [state, setState] = useState(false);
    const {setCatagory} = useContext(CategoryCntxt);
    const history = useHistory();

    const categoryHandler = (e) =>{
        console.log(e.target.innerText)
        let cat = e.target.innerText.toLowerCase()
        setCatagory(cat);
        history.push('/category');
    }




    return (
        <div className="banner-links-erapper">
            <div className="banner-links">
                <div onClick={()=>{setState(!state)}} className="all-categories">
                    <span >ALL CATOGERIES</span>
                    <Arrow />
                </div>

                <div className="category-links">
                    <span>cars</span>
                    <span>Motorcycles</span>
                    <span>Mobile phones</span>
                    <span>For sale: House & Apartments</span>
                    <span>Scooters</span>
                    <span>Commercial & Other Vehicles</span>
                    <span>For Rent: Houses & Apartments</span>
                </div>
            </div>

            {   state &&
                <div className="f-category-list">
                    <div className="cat-links">
                        <span className="f-c-head">VEHICLES</span>
                        <span onClick = {categoryHandler} >Car</span>
                        <span onClick = {categoryHandler} >Scooter</span>
                        <span onClick = {categoryHandler} >Bike</span>
                    </div>
                </div>}
        </div>
    )
}

export default HeaderLinks;
