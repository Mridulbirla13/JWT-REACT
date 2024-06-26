import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
  
    const handleSubmit = async (e) => {
      try{

      } catch(error){

      }
    };
  return (
    <div className='container-forgot'>
      <div className="forgot-box">
        <h1 className='forgot-head'>Reset Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="NewPassword" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <div className="btn">
          <Button variant="primary" type="submit">
            Reset Password
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;