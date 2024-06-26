import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/auth/request-reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });
        const result = await response.json();
        alert(result.message);
        navigate("/register");
      } catch (error) {
        console.error(error.message);
      }
    };
  return (
    <div className='container-forgot'>
      <div className="forgot-box">
        <h1 className='forgot-head'>Forgot Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;