import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { validUser } from '../services/auth';

class ProtectedRoutes extends Component {
    render() {
        const isAuthenticate = validUser();
        return (
            <Route
                path={this.props.path}
                render={props =>
                    isAuthenticate ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
                }
            />
        );
    }
}

// const ProtectedRoutes = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         <Component {...props} />
//     )} />
// )



export default ProtectedRoutes;