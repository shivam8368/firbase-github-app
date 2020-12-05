import React, { useState } from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// react-router
import {BrowserRouter as Router, Switch ,Route, Link} from 'react-router-dom';
import { toast } from 'react-toastify';

// toast

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// components
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import PageNotFound from './Pages/PageNotFound';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

//firebase
import firebaseConfig from "./config/FirebaseConfig";
import JobPage from './Pages/JobPage';
import UserPage from './Pages/UserPage';


//init firebase
firebase.initializeApp(firebaseConfig);



const App = () => {
  const [user, setUser] = useState(null);





  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value ={{user , setUser}}>
        <Switch>
          <Route exact path ="/" component ={Home} />
          <Route exact path ="/SignUp" component ={SignUp} />
          <Route exact path ="/SignIn" component ={SignIn} />
          <Route exact path ="/Jobs" component ={JobPage} />
          <Route exact path ="/UserPage" component ={UserPage} />
          <Route exact path ="*" component ={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
