import React,{useContext} from 'react';
import Header1 from '../../Components/Header1/Header1';
import CategoryLinks from '../../Components/CategoryLinks/CategoryLinks';
import Productgrid from '../../Components/Productgrid/Productgrid';
import Footer from '../../Components/Footer/Footer';
import './Category.css'
import { CategoryCntxt } from '../../Contexts/CatContext';

const Category = () =>{

    const {category} = useContext(CategoryCntxt);

    return (
        <div className="Category-Main-Wrapper">
            <Header1 />
            <CategoryLinks/>
            <div className="category-grid">
                <Productgrid cat={category} />
            </div>
            <Footer />
            
        </div>
    )
}

export default Category;