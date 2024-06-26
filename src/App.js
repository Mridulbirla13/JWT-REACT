import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import Navbar from './pages/Navibar/Navibar';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/auth/login/ForgotPassword';


 
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element = {<Signup></Signup>}></Route>
        <Route path="/dashboard" element = {<Dashboard></Dashboard>}></Route>
        
      </Routes>    
    </>
  );
}

export default App;
