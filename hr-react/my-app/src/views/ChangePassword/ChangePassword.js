import React, { Component } from 'react';

class ChangePassword extends Component {
    render() {
        return (
            <div>
               <form >
                    
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label" >Current Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control"  placeholder="Current Password"/>
                        </div> 
                    </div> 
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">New Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" placeholder="New Password"/>
                        </div> 
                    </div> 
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Confirm Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" placeholder="Confirm Password"/>
                        </div> 
                    </div> 
                </form>
            </div>
        );
    }
}

export default ChangePassword;

 {/*<form className="form-inline">
    <div className="form-group mb-2">
        <label for="staticEmail2" className="sr-only">Email</label>
        <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com">
    </div>
    <div className="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" className="sr-only">Password</label>
        <input type="password" className="form-control" id="inputPassword2" placeholder="Password">
    </div>
    <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
</form>*/}