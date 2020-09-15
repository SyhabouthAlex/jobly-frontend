import React, { useState, useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import {decode} from 'jsonwebtoken';
import NavBar from "./NavBar";
import Routes from "./Routes";
import JoblyApi from "./JoblyApi";
import "./App.scss"
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./UserContext";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const {username} = decode(token);
        const result = await JoblyApi.getCurrentUser(username);
        setCurrentUser(result);
      }
      catch (e) {
        setCurrentUser(null);
      }
    }
    getCurrentUser();
  }, [token])

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <div className="App">
          <NavBar logout={handleLogout}/>
          <Routes setToken={setToken}/>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
