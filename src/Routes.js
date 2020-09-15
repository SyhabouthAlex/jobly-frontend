import React from "react";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Login from "./Login";
import Company from "./Company"
import Home from "./Home";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";

function Routes({setToken}) {
    return (
        <div className="content pt-5">
            <Switch>
                <PrivateRoute exact path="/companies" children={<Companies/>}/>
                <PrivateRoute path="/jobs" children={<Jobs/>}/>
                <PrivateRoute path="/profile" children={<Profile/>}/>
                <Route exact path="/login">
                    <Login setToken={setToken}/>
                </Route>
                <Route exact path="/companies/:handle">
                    <Company/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default Routes;