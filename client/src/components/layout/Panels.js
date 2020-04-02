import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getTransactions,
  addAccount,
  getAuth
} from "../../actions/accountActions";
import TopPanel from "./TopPanel";
import BottomPanel from "./BottomPanel";
import LineChart from "../dashboard/LineChart";
import DonutChart from "../dashboard/DonutChart";
import credit from "../../img/icons8-mastercard.svg";


class Panels extends Component {
    componentDidMount() {
        const { accounts} = this.props;
        this.props.getTransactions(accounts);
        this.props.getAuth(accounts);
    }
    // Add Account
    handleOnSuccess = (token, metadata) => {
        const {accounts } = this.props;
        const plaidData = {
            public_token: token,
            metadata: metadata,
            accounts: accounts
        };
        this.props.addAccount(plaidData)
    }

    render() {
        const {user} = this.props;
        const {transactions}  = this.props.palid;
        const {auth} = this.props.plaid;

        return (
           <section>
           <div className="top-dashboard">
               <TopPanel>
                   <h3>summary</h3>
                   <p>balance</p>
                   <>
                   {auth.map(account=>{
                       return(
                           <p key={account.auth[0].account.id} className="balance">
                               {account.auth[0].balances.current}NAIRA
                           </p>
                       )
                   })}
                   </>
                   <div className="line">
                       <LineChart />
                   </div>
                   <button 
                   className="btn-info details-button"
                   type="buton"
                   name="button"
                   >
                    More Details   
                   </button>
               </TopPanel>
               <TopPanel>
                   <div className="cards-header">
                       <h3>your cards</h3>
                   </div>
               </TopPanel>
           </div>
           </section>
        )
    }
}

export default 