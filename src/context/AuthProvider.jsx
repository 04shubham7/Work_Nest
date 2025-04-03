import React, { useState,createContext, useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
const [userData, setuserData] = useState({employees: [], admin: []})






useEffect(() => {
  setLocalStorage()
  const {employees=[],admin=[]} = getLocalStorage()
setuserData({employees,admin})

}, [])


  return (
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider