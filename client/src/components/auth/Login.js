import React from 'react'
import { Link} from "react-router-dom";
import { connect} from "react-redux";
import { loginUser} from "../../actions/authActions";

 class Login extends Component {
     state  = {
       email: "",
       password: "",
       errors: {}
     }
   componentDidMount() {
     if(this.props.auth.isAuthenticated){
         this.props.history.push("/accounts") //push user to account when login
     }  
   }
   
   componentWillRecieveProps(){
       if(nexProps.auth.isAuthenticated){
       this.props.history.push("/accounts"); //push user to dashboard when they login
       }
   }

   handleOnChange = e=>{
   this.setState({[e.target.id]: e.target.value});
   };

   handleOnSubmit = e =>{
       e.preventDefault();
       const userData =  {
        email: this.email,
        password: this.password
       };
       this.props.loginUser(userData);
   };


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Login;