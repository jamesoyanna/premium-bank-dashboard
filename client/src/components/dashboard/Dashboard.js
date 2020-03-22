import React, { Component } from 'react'
import Navigation from "../layout/Navigation";
import Menu from "../layout/Menu";
import Panels from "../layout/Panels";
import Header from "../layout/Header";

 class Dashboard extends Component {
    render() {
       
        const {uer, accounts} = this.props
;
        return (
            <div className="wrapper">
            <Navigation />
            <Menu
            home="home"
            saving="savings"
            bills = "bills"
            loans = "loans"
            invest = "investments"
            contact = "contacts"
            />
            <Header />
            <Panels user={user} account = {accounts} />
            </div>
        )
    }
}

export default Dashboard;