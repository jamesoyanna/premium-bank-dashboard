// import React from 'react';
// import { Link } from "react-router-dom";
// import { logoutUser} from 
// import logout from 
// import notification from 
// import profile from 


 class Navigation extends Component {
     state = {
         query: ""
     }

     handleSearchTerm = event=>{
         this.setState({
             query: event.target.value
         })
     };
    
     handleLogoutClick = e=>{
         e.preventDefault();
         this.props.logoutUser();
     };

    render() {
      const { user } = this.props.auth;

        return (
            <nav>
                <Link className="logo" to="/">
                    <strong>PREMIUM</strong>BANK
                </Link>
                <input 
                onChange = {this.handleSearchTerm}
                type="text"
                value={this.state.query}
                placeholder="Search"
                />
                <Link className="transfer" to="/transfer">
                    <button className="btn---default" type="button">
                        Money Transfer
                    </button>
                </Link>
                <ul className="navbar">
                    <li className="profile">
                        <img src={profile} alt="profile face" />
                            Hello, {user.name}
                    </li>
                    <li>
                        <img src={notification} alt="notification icon" />
                    </li>
                    <li className="logout">
                        Logout
                     <img
                     onClick = {this.handleLogoutClick}
                     src={logout}
                     alt="logout icon"
                     />
                    </li>
                </ul>
               
            </nav>
        )
    }
}

export default Navigation;