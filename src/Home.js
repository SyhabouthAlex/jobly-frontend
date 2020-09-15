import React, { useContext } from "react";
import "./Home.css"
import { useHistory, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import UserContext from "./UserContext";

function Home() {
    const {currentUser} = useContext(UserContext);
    const history = useHistory();

    function logInRedirect() {
        history.push("/login")
    }
    
    if (currentUser) {
        return <Redirect to="/companies"/>
    }
    else {
        return (
            <div className="Home">
                <Button color="primary" onClick={logInRedirect}>Log In</Button>
            </div>
        )
    }
}

export default Home;