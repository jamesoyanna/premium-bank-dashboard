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
   

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Login;