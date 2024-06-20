import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfo: null,
  searchCars : null,
  searchFunc:() => {},
  login: () => {},
  logout: () => {},
});

export default AuthContext;
