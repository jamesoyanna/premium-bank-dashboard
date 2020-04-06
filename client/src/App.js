import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";
import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";

import "./css/style.scss";
import store from "./store";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Account from "./components/dashboard/Accounts";
import PrivateRoute from "./components/private-route/PrivateRoute";

//Check
if(localStorage.jwtToken){
  //se
}



function App() {
  return (
    <div className="App">
     App js
    </div>
  );
}

export default App;
