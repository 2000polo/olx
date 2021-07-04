import React,{useState, useContext} from 'react';
import Logo from '../../Assets/Logo';
import Search from '../../Assets/Search';
import Arrow from '../../Assets/Arrow';
import Heart from '../../Assets/Heart';
import Plus from '../../Assets/Plus';
import { AuthContext, firebaseContext } from '../../Contexts/Context';
import {useHistory} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import {BiMessage, BiBell} from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './Header1.css';

const Header1 = () =>{

    const [locDrop, setLocationDrop] = useState('false');
    const [langDrop, setLangDrop] = useState('false');
    const [dpDrop, setDpdrop] = useState('false');

    const {user} = useContext(AuthContext);
    const {Firebase} = useContext(firebaseContext);

    const history = useHistory();

    // console.log(user.displayName)

    const logoutHandler = () =>{
        Firebase.auth().signOut();
        history.push('/signup');
    }

    const createBtnHandler = ()=>{
        history.push('/create');
    }

    

    const locationDropdown = <div className="location-dropdown-tile">
                                <div className="locations">
                                <Heart />
                                <p className="location-name">India</p>

                                </div>
                                <div className="locations">
                                <Heart />
                                <p className="location-name">Canada</p>
                                </div>
                                <div className="locations">
                                <Heart />
                                <p className="location-name">France</p>
                                </div>
                            </div>;

    const languageDropdown = <div className="language-dropdown">
                                <div className="language-tile">
                                    <p className="lang">English</p>
                                    <Heart />
                                </div>
                                <div className="language-tile">
                                    <p className="lang">Hindi</p>
                                    <Heart />
                                </div>
                            </div>;

    const dpDropdown = <div className = "dp-dropdown-wrapper">
                            <div className="dp-dropdown">
                                <div className="dp-drop-tile">
                                    <p className="logout"><a href='#' onClick={logoutHandler}>logout</a></p>
                                    <Heart />
                                </div>
                                <div className="dp-drop-tile">
                                    <p className="logout"><a href="#">Settings</a></p>
                                    <Heart />
                                </div>
                            </div>
                        </div> 

    const locDrophandler = ()=>{
        setLocationDrop(!locDrop);
    }

    const langDropHandler = ()=>{
        setLangDrop(!langDrop);
    }

    const dpDropHandler = ()=>{
        setDpdrop(!dpDrop);
    }

    return(
        <div className="header-main-container">
            <div className="header-container">
                <div className="header">

                    
                    <div className="logo">
                        <Logo />
                    </div>

                    
                        <div className="location">
                            <div className="location-input">
                                <Search />
                                <input onClick={locDrophandler}  type="text" placeholder = "Location"/>
                                <div onClick={locDrophandler} ><Arrow /></div>
                                
                            </div>

                            <div className="location-dropdown">
                                {locDrop?"":locationDropdown}
                            </div>
                        </div>

                        <div className="search">
                            <div className="search-input">
                                <div className="srch-input-border">
                                    <input className= "srch-inpt" type="text" placeholder="Find Cars, Mobile phonoes and More..." />
                                </div>
                                <div className="srch-btn">
                                    <IconContext.Provider value={{color:"white", size:"23px"}} >
                                        <FiSearch />
                                    </IconContext.Provider>
                                    
                                </div>
                                
                            </div>
                        </div>
                    {/* </div> */}

                    <div className="language-wrapper">
                        <div className="language">
                            <div className="icon">
                                <h5>ENGLISH</h5>
                                <div onClick={langDropHandler}>
                                    <Arrow />
                                </div>
                                
                            </div>
                            
                            {langDrop?"":languageDropdown}
                            
                        </div>
                        
                        
                    </div>

                    <div className="signup-sellbtn-wrapper">
                        <div className="h-icon">
                            <IconContext.Provider value={{color:"#002f34", size:"25px"}}>
                                <BiMessage/>
                            </IconContext.Provider>
                        </div>
                        <div className="h-icon">
                        <IconContext.Provider value={{color:"#002f34", size:"25px"}}>
                                <BiBell/>
                        </IconContext.Provider>
                        </div>
                    </div>    
                        <div className="dp-header-wrapper">
                                <div className = "dp-header-icon">
                                    <div className="dp-header" onClick={dpDropHandler}>
                                        <span className="uNamef">{user?user.displayName[0]:""}</span>
                                    </div>
                                    <Arrow />
                                </div>

                                {dpDrop?"":dpDropdown}                           
                        </div>

                        {/* <div className="login"><a href="#">Login</a></div> */}

                        <div onClick={createBtnHandler} className="sell-btn-header">
                            <Plus />
                            <h3>Sell</h3>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header1;
