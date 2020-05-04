import React, { useState } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import About from '../About/AboutContainer';
import Home from '../HomeContainer';
import LoginContainer from '../Login/LoginContainer';
import auth from './Auth'
import NgoDashContainer from '../../Dashboard/Ngo/NgoDashContainer';
import DonorDashContainer from '../../Dashboard/Donor/DonorDashContainer';
import SuperAdminDashboard from '../../Dashboard/SuperAdmin/SuperAdminDashboard';
import PaymentGateway from '../../Dashboard/Ngo/4PaymentGateway/PaymentGateway';

const HeaderContainer = () => {

    const [user, setUser] = useState('FromState')

    return (
        <div>
            {/* Routing Logic */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" render={(props) => <LoginContainer {...props} user={user} />} />
                <PrivateRoute path='/ngoDashboard' component={NgoDashContainer} user={user} />
                <PrivateRoute path='/donorDashboard' component={DonorDashContainer} user={user} />
                <PrivateRoute path='/superAdminDashboard' component={SuperAdminDashboard} user={user} />

                <Route exact path="/donatePaymentsGateway" component={PaymentGateway} />

                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </div >
    )
}

/* Logic to Check if Logged iN or Not*/

function PrivateRoute({ component: Component, user, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => auth.isAuthenticated() === true
                ? <Component user={user} {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

export default HeaderContainer
