import React, { useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

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