import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfo: null,
  searchCars : null,
  isPasswordChange : null,
  idUserForPass: null,
  searchFunc:() => {},
  passwordChange:() => {},
  passwordChangeIdUser:() => {},
  login: () => {},
  logout: () => {},
});

export default AuthContext;
