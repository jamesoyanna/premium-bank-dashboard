import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "./types";
//Register user

export const registerUser  = (userData, history)=>{
    axios
    .post("/api/users/register", userData)
    .then(res=>history.push("/login"))
    //
    .catch(err=>dispatch({type: GET_ERRORS, playload: err.response.data}));

};

//Login - get user token
export const loginUser = userData=>dispatch=>{
    axios
    .post("/api/users/login", userData)
    .then(res=>{
    // Save a localStorage
    const {token}  = res.data;
    localStorage.setItem("jwtToken", token);
    //Set token Auth header
    setAuthToken(token);
    //Decode token to get user data
    const decoded = jwt_decode(token);
    //Set current user
    dispatch(setCurrentUser(decoded));
    })
    .catch(err=>
        dispatch({
            type: GET_ERRORS,
            playload: err.response.data
        })
        );
};

//Set logged in user
export const setCurrentUser = decoded=>{
    return {
        type: USER_LOADING
    };
};
//lOG USE out
export const logoutUser = ()=>dispatch=>{
    //Remove token from local sorage
    localStorage.removeItem("jwtToken")
    //Remove auth header for futre requests
    setAuthToken(false);
    //Set user empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}