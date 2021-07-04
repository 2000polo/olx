import React,{createContext, useState} from 'react';

export const firebaseContext = createContext(null);

export const AuthContext = createContext(null);

function Context ({children}) {
    const [user, setUser] = useState();

    return(
        <AuthContext.Provider value={{user, setUser}} >
            {children}
        </AuthContext.Provider>
    )

}

export default Context;