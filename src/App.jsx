import React, { useCallback, useEffect, useState } from "react";
import './App.css'
import routes from './routes'
import AuthContext from './Context/AuthContext'
import { useRoutes } from 'react-router-dom'
import i18n from "./i18n";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);
  const [token, setToken] = useState(false);
  const [idUserForPass, setIdUserForPass] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [searchCars, setSearchCars] = useState([])
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
      fetch(`https://mkrentacar.liara.run/users`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((userData) => {
          let userFiltered = userData.filter(data => data.token == localStorageData.token)
          setIsLoggedIn(true);
          setUserInfo(userFiltered);
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }

    //language Change
    const localStorageDataLanguage = JSON.parse(localStorage.getItem("letter"));
    if (localStorageDataLanguage) {
      i18n.changeLanguage(localStorageDataLanguage)
    }
  }, []);

  //search
  const searchFunc = (array) => {
    setSearchCars(array)
  }

  //pass change
  const passwordChange = (value) => {
    setIsPasswordChange(value)
  }

  // pass change ID 
  const passwordChangeIdUser = (id) => {
    setIdUserForPass(id)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfo,
        searchCars,
        isPasswordChange,
        idUserForPass,
        passwordChangeIdUser,
        passwordChange,
        searchFunc,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>


  )
}

export default App
