import React,{ useContext, useEffect } from'react';
import Home from './Pages/Home/Home';
import './App.css';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import {BrowserRouter,Route} from 'react-router-dom';
import { AuthContext, firebaseContext } from './Contexts/Context';
import Create from './Pages/Create/Create';
import View from './Pages/View/View';
import ViewPost from './Contexts/ViewContext';
import Category from './Pages/CategoryView/Category';
import CategoryCon from './Contexts/CatContext';

function App() {

  const {setUser} = useContext(AuthContext);
  const {Firebase} = useContext(firebaseContext);

  useEffect(()=>{
    Firebase.auth().onAuthStateChanged((user)=>{
      // setUser(user);
      // console.log(user.displayName);
      setUser(user);
    })
    
  })

  return (
    <div className="App">
      <ViewPost >
        <BrowserRouter>
        <CategoryCon>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/view'>
            <View />
          </Route>
          <Route path='/category'>
            <Category/>
          </Route>
        </CategoryCon>
        </BrowserRouter>
      </ViewPost>
    </div>
  );
}

export default App;
