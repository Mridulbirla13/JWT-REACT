import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`https://jwt-react.vercel.app/auth/reset-password/${token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });
        const result = await response.json();
        setMessage(result.message);
        if (response.ok) {
          // Redirect to login page or another page after successful password reset
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Something went wrong. Please try again later.');
      }
  };

  return (
    <div className='container-login'>
      <div className="login-box">
        <h1 className='login-head'>Reset Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </Form.Group>
          <div className="btn">
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </div>
        </Form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;

