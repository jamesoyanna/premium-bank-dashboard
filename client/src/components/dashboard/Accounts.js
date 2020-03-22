import React from 'react';
import {connect} from "react-redux";
import { getAccounts, addAccount} from "../../actions/accountActions";
import Dashboard from "./Dashboard";
import PlaidLink from "react-plaid-link";


 class Accounts extends Component {
      componentDidMount() {
          this.props.getAccounts();
      }
      
      //Add


    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default Accounts;