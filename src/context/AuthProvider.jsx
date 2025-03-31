import React, { useState,createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const [userData, setuserData] = useState(null)
const data =getLocalStorage()
console.log(data.employees)

  return (
    <AuthContext.Provider value={"Sarthak"}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider