import React, {useState, useContext} from 'react';
import { firebaseContext } from '../../Contexts/Context';
import {useHistory} from 'react-router-dom';


import './Signup.css';

function Signup(){

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const {Firebase} = useContext(firebaseContext);

    const submitHandler = (e)=>{
        e.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
            // console.log(result)
            result.user.updateProfile({displayName:username}).then(()=>{
                Firebase.firestore().collection('user').add({
                    id:result.user.uid,
                    username:username,
                    phonenumber:phone
                }).then(()=>{
                    history.push("/login")
                })

            })
        })

    }

    return(
        <div className="signup-page-container">
            <div className="signup-container">
                <div className="signup-form-container">

                    <div className="signup-form">

                        <div className="signup-image">

                        </div>

                        <div className="s-heading">
                            <h3>Sign Up</h3>
                            <p>Help make OLX safer place to buy and sell</p>
                        </div>

                        <div className="sign-form">
                            <form onSubmit={submitHandler}>

                                <table>
                                    <tr className="row">
                                        <td>

                                            <label htmlFor="name" className="label">
                                                Name
                                            </label>
                                        
                                        </td>

                                        <td>

                                            <input type="text"
                                            placeholder="Your name"
                                            id="username"
                                            value={username}
                                            onChange={(e)=>setUsername(e.target.value)}
                                            className="input"
                                            
                                            />
                                            

                                        </td>
                                    </tr>

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

                                            <label htmlFor="phone" className="label">Phone</label>

                                        </td>

                                        <td>
                                            <input type="text"
                                            placeholder="Enter your phone number"
                                            id="phone"
                                            className="input"
                                            value={phone}
                                            onChange={(e)=>setPhone(e.target.value)}/>
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
                                            >Sing Up</button>
                                </div>
                                <div className="or">
                                    <div className="line"></div>
                                    <span>Or</span>
                                    <div className="line"></div>
                                </div>

                                <div className=" btn">
                                    <button className="l-btn">Login</button>
                                </div>
                                
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;