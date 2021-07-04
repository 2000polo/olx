import React,{useState, createContext} from 'react';

export const PostViewContext = createContext(null);

function ViewPost ({children}) {

    const [postDet, setpostDet] = useState({})

    return (
        <PostViewContext.Provider value={{postDet, setpostDet}}>
            {children}
        </PostViewContext.Provider>
    )
}

export default ViewPost;