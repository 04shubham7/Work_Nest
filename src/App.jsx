  import React, { useContext, useEffect, useState } from 'react';
  import Login from './components/Auth/Login';
  import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
  import AdminDashboard from './components/Dashboard/AdminDashboard';
  import { getLocalStorage, setLocalStorage } from './utils/localStorage';
  import { AuthContext } from './context/AuthProvider';

 

  const App = () => {
   
    const [user, setUser] = useState(null);
    const authData = useContext(AuthContext);
    const [loggedInUserData, setLoggedInUserData] = useState(null)

  

  // useEffect(() => {
    
  //   if(authdata){
  //     const loggedInUser=localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //         const userData=JSON.parse(loggedInUser)
  //       setUser(userData.role);
  //          setLoggedInUserData(userData.data)
  //     } 
  //   }

  // }, [authdata])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = (loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  
    return () => {
      
    }
  }, [])
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser({ role: 'admin' }); // Change user state to object with role
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' }) // Store the same structure
      );
    } else if (authData && Array.isArray(authData.employees)) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser({ role: 'employee', data: employee }); // Include employee data
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''} {/* Equivalent to checking for !user */}
      {user?.role === 'admin' ? (
        <AdminDashboard changeUser={setUser} /> // Adding `changeUser` for consistency
      ) : user?.role === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
  }  

  export default App;