import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from  "react-redux";
import {registerUser} from "../../actions/authActions";

class Register extends Component {
    state = {
        name: "",
        enail: "",
        password: "",
        password2: "",
        errors: {}
    };
  
    componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/accounts");
        }
    }

    componentWillReceiveProps(){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleOnChange = e=>{
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = e=>{
        e.preventDefault();
        const newUser = {
           name:  this.state.name,
           email: this.state.email,
           password: this.state.password,
           password2: this.state.password2 
        };

        this.props.registerUser(newUser, this.props.history);
    }
    


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default