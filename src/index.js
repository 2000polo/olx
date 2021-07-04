import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { firebaseContext } from './Contexts/Context';
import Context from './Contexts/Context';
import Firebase from './Firebase/Config';
ReactDOM.render(

  <firebaseContext.Provider value={{Firebase}}>
    <Context >
      <App />
    </Context>
  </firebaseContext.Provider>,

document.getElementById('root')
);


