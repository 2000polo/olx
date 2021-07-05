import React,{useState, useContext} from 'react';
import Logo from '../../Assets/Logo';
import Search from '../../Assets/Search';
import Arrow from '../../Assets/Arrow';
import Heart from '../../Assets/Heart';
import Plus from '../../Assets/Plus';
import { AuthContext, firebaseContext } from '../../Contexts/Context';
import {useHistory} from 'react-router-dom';
import { FiSearch, FiCheck, FiSettings } from 'react-icons/fi';
import {BiMessage, BiBell, BiCurrentLocation, BiHelpCircle, BiDownload, BiLogOut} from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { TiDocumentText } from 'react-icons/ti'
import { RiTodoLine } from 'react-icons/ri'
import { MdPayment } from 'react-icons/md'
import { IconContext } from 'react-icons';

import './Header1.css';

const Header1 = () =>{

    const [locDrop, setLocationDrop] = useState('false');
    const [langDrop, setLangDrop] = useState('false');
    const [dpDrop, setDpdrop] = useState('false');

    const {user, name} = useContext(AuthContext);
    const {Firebase} = useContext(firebaseContext);

    const history = useHistory();

    const logoutHandler = () =>{
        Firebase.auth().signOut();
        history.push('/signup');
    }

    const createBtnHandler = ()=>{
        history.push('/create');
    }

    

    const locationDropdown = <div className="location-dropdown-tile">

                                <div className="current-location-wrapper">
                                        <IconContext.Provider value={{color:"skyblue", size:"23px"}} >
                                            <BiCurrentLocation />
                                        </IconContext.Provider>
                                        <div className="current-data">
                                            <h4>Use current location </h4>
                                            <p>Location blocked. Check browser or phone settings</p>
                                        </div>
                                </div> 

                                <div className="locations">
                                    <IconContext.Provider value={{color:"#002f34", size:"23px"}} >
                                        <GoLocation />
                                    </IconContext.Provider>
                                <p className="location-name">Kochi</p>
                                </div>
                                <div className="locations">
                                    <IconContext.Provider value={{color:"#002f34", size:"23px"}} >
                                        <GoLocation />
                                    </IconContext.Provider>
                                <p className="location-name">Ernakulam</p>
                                </div>
                                <div className="locations">
                                    <IconContext.Provider value={{color:"#002f34", size:"23px"}} >
                                        <GoLocation />
                                    </IconContext.Provider>
                                <p className="location-name">Aaluva</p>
                                </div>
                                <div className="locations">
                                    <IconContext.Provider value={{color:"#002f34", size:"23px"}} >
                                        <GoLocation />
                                    </IconContext.Provider>
                                <p className="location-name">Thrissur</p>
                                </div>
                                <div className="locations">
                                    <IconContext.Provider value={{color:"#002f34", size:"23px"}} >
                                        <GoLocation />
                                    </IconContext.Provider>
                                <p className="location-name">Ankamali</p>
                                </div>
                            </div>;

    const languageDropdown = <div className="language-dropdown">
                                <div className="language-tile">
                                    <p className="lang">English</p>
                                    <IconContext.Provider value={{size:"23px"}} >
                                        <FiCheck />
                                    </IconContext.Provider>
                                </div>
                                <div className="language-tile">
                                    <p className="lang">Hindi</p>
                                    {/* <Heart /> */}
                                </div>
                            </div>;

    const dpDropdown = <div className = "dp-dropdown-wrapper">
                            <div className="dp-dropdown">
                                <div className=" dp-tile">
                                    <div className="dp-header"></div>
                                    <div className="dp-name-welcome-tile">
                                        <span>Hello!</span>
                                        <h4>{user?user.displayName:""}</h4>
                                        <p><a href="#">View and edit profile</a></p>
                                    </div>
                                    
                                </div>
                                <div className="dp-drp-dwn-link-wrapper1">
                                    <div className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <TiDocumentText/>
                                        </IconContext.Provider>
                                        <p>My Ads</p>
                                    </div>
                                    <div className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <RiTodoLine/>
                                        </IconContext.Provider>
                                        <p>Buy Business Packages</p>
                                    </div>
                                    <div className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <MdPayment/>
                                        </IconContext.Provider>
                                        <p>Packages and Billing</p>
                                    </div>
                                </div>
                                <div className="dp-drp-dwn-link-wrapper1">
                                    <div className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <BiHelpCircle/>
                                        </IconContext.Provider>
                                        <p>Help</p>
                                    </div>
                                    <div className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <FiSettings/>
                                        </IconContext.Provider>
                                        <p>Settings</p>
                                    </div>
                                </div>
                                <div className="dp-drp-dwn-link-wrapper1">
                                    <div className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <BiDownload/>
                                        </IconContext.Provider>
                                        <p>Help</p>
                                    </div>
                                </div>
                                <div className="dp-drp-dwn-link-wrapper1">
                                    <div onClick={logoutHandler} className="dp-drop-tile">
                                        <IconContext.Provider value={{color:"#002f34", size:"23px"}}>
                                            <BiLogOut/>
                                        </IconContext.Provider>
                                        <p>Logout</p>
                                    </div>
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
                                <h5 onClick={langDropHandler} >ENGLISH</h5>
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
