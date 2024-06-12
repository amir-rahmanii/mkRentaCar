import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfo: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
