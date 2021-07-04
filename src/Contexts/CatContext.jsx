import React,{createContext, useState} from 'react'

export const CategoryCntxt = createContext(null);

const CategoryCon = ({children}) =>{
    const [category, setCatagory] = useState(null);

    return(
        <CategoryCntxt.Provider value={{category, setCatagory}} >
            {children}
        </CategoryCntxt.Provider>
    )
    
}

export default CategoryCon;
