import React from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const [userData, setuserData] = useState(null)

  return (
    <AuthContext.Provider value={"Sarthak"}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider