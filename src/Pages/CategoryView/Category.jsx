import React,{useContext} from 'react';
import Header1 from '../../Components/Header1/Header1';
import Productgrid from '../../Components/Productgrid/Productgrid';
import './Category.css'
import { CategoryCntxt } from '../../Contexts/CatContext';

const Category = () =>{

    const {category} = useContext(CategoryCntxt);

    return (
        <div className="Category-Main-Wrapper">
            <Header1 />
            <div className="category-grid">
                <Productgrid cat={category} />
            </div>
            
        </div>
    )
}

export default Category;