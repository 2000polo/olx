import React,{useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { firebaseContext } from '../../Contexts/Context';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './Login.css';

function Login(){

    let history = useHistory();
    const {Firebase} = useContext(firebaseContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const submitHandler = (e)=>{
        e.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            history.push('/')
        })
        setLoading(true);
        // catch((error)=>{
        // // console.log(error.message)
        // })
    }

    const signupHandler= () =>{
        history.push('/signup')
    }

    return(
        <div className="login-page-container">
            <div className="login-container">
                <div className="login-form-container">
                <div className="login-form">

                    <div className="login-image">

                    </div>

                        <div className="l-heading">
                            <h3>Sign Up</h3>
                            <p>Help make OLX safer place to buy and sell</p>
                        </div>

                        <div className="log-form">
                            <form onSubmit={submitHandler}>

                                <table>

                                    <tr className="row">
                                        <td>

                                            <label htmlFor="email" className="label">Email</label>

                                    </td>

                                    <td>
                                        <input type="email"
                                        placeholder="enter your email"
                                        id="email"
                                        className="input"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td>

                                        <label htmlFor="password" className="label">Password</label>

                                    </td>

                                    <td>
                                        <input type="password"
                                        placeholder="Password"
                                        id="password"
                                        className="input"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}/>
                                    </td>
                                </tr>
                            </table>

                            <div className=" btn">
                                <button type="submit" className="s-btn"
                                        >Login</button>
                            </div>
                            <div className="or">
                                <div className="line"></div>
                                <span>Or</span>
                                <div className="line"></div>
                            </div>

                            <div className=" btn">
                                <button onClick={signupHandler} className="l-btn">sign Up</button>
                            </div>
                            
                        </form>
                        
                    </div>

                    </div>
                </div>
            </div>
            {
            loading ? 
            <div className="loader">
            
                
                <Loader
                type="TailSpin"
                color="#002f34"
                height={30}
                width={100}
                // timeout={3000} //3 secs
              /> 
              <p>Loading</p>
            
            </div>
             : ""
            }
        </div>
    )
}

export default Login;