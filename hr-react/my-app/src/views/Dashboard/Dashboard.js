import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <a className="card" href="/apply-leaves"> 
                    <div className="card-body">
                        <h5 className="card-title">Apply Leave</h5> 
                    </div>
                </a>
                <a className="card" href="/holiday-list"> 
                    <div className="card-body">
                        <h5 className="card-title">Holiday List</h5> 
                    </div>
                </a>
                <a className="card" href="/my-leave"> 
                    <div className="card-body">
                        <h5 className="card-title">My Leave</h5> 
                    </div>
                </a>
                <a className="card" href="/badge-nomination"> 
                    <div className="card-body">
                        <h5 className="card-title">Badge Nomination</h5> 
                    </div>
                </a>
                <a className="card" href="/change-password"> 
                    <div className="card-body">
                        <h5 className="card-title">Change Password</h5> 
                    </div>
                </a>
            </div>
        );
    }
}

export default Dashboard;

