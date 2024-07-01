import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import Navbar from './pages/Navibar/Navibar';
import Dashboard from './pages/dashboard/Dashboard';
// import ForgotPassword from './pages/auth/login/ForgotPassword';
// import ResetPassword from './pages/auth/login/resetPassword';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard');
    }
  }, [navigate]);
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element = {<Login></Login>}></Route>
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path="/register" element = {<Signup></Signup>}></Route>
        <Route path="/dashboard" element = {<Dashboard />}></Route>
        <Route path="/" element={<Navigate to = "/register"/>}></Route>
      </Routes>    
    </>
  );
}

export default App;
