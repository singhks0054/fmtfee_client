import React, { useState } from "react";

const AuthContext = React.createContext({
  token: '',
  isLogIn: true,
  name: '',
  login: (token) => { },
  logout: () => { }
})

export const AuthContextProvider = (props) => {

  const initialState = localStorage.getItem('token')
  const initialName = localStorage.getItem('name')
  const [token, setToken] = useState(initialState)
  const [name, setName] = useState(initialName);
  const userIsLoggedIn = !!token;

  const loginHandler = (token, name) => {
    setToken(token)
    setName(name)
    localStorage.setItem('token', token)
    localStorage.setItem('name', name)
  }
  const logoutHandler = () => {
    setToken(null)
    setName(null)
    localStorage.removeItem('token')
    localStorage.removeItem('name')
  }

  const contextValue = {
    token: token,
    isLogIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    name: name

  }
  return (<AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>)

}
export default AuthContext;