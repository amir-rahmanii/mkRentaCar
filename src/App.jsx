import React, { useCallback, useEffect, useState } from "react";
import './App.css'
import routes from './routes'
import AuthContext from './Context/AuthContext'
import { useRoutes } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const router = useRoutes(routes)


  const login = (userInfo, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfo(userInfo);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = useCallback(() => {
    setToken(null);
    setUserInfo({});
    localStorage.removeItem("user");
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:5000/users`)
        .then((res) => res.json())
        .then((userData) => {
          let userFiltered = userData.filter(data => data.token == localStorageData.token)
          setIsLoggedIn(true);
          setUserInfo(userFiltered);
        });
    }
  }, []);


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfo,
        login,
        logout,
      }}
    >
      {router}
   </AuthContext.Provider>


  )
}

export default App
