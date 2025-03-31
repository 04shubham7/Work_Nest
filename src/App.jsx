import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser({ role: 'admin' }); // Correct usage of `setUser`
      
    } else if (email === 'user@me.com' && password === '123') {
      setUser({ role: 'employee' }); // Correct usage of `setUser`
    
    } else {
      alert('INVALID CREDENTIALS');
    }
  };
  const data = useContext(AuthContext);
  console.log(data)

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default App;