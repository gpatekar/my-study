import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 

import Header from '../../components/Header/Header';
import Dashboard from '../../views/Dashboard/Dashboard';
import ApplyLeave from '../../views/ApplyLeave/ApplyLeave';
import BadgeNomination from '../../views/BadgeNomination/BadgeNomination';
import ChangePassword from '../../views/ChangePassword/ChangePassword';
import HolidayList from '../../views/HolidayList/HolidayList';
import MyLeave from '../../views/MyLeave/MyLeave';

class Full extends Component {
    render() {
        return (
            <div>
                <Header/> 
                <div className="container">
                    <div className="main">
                         <Switch>
                            <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                            <Route path="/apply-leaves" name="ApplyLeave" component={ApplyLeave}/>
                            <Route path="/badge-nomination" name="BadgeNomination" component={BadgeNomination}/>
                            <Route path="/change-password" name="ChangePassword" component={ChangePassword}/>
                            <Route path="/holiday-list" name="HolidayList" component={HolidayList}/>
                            <Route path="/my-leave" name="MyLeave" component={MyLeave}/> 
                        </Switch>
                    </div>
                </div>
             </div>
        );
    }
}

export default Full;