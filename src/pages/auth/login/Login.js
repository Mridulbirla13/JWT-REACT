import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GoogleButton from '../GoogleButton';
import GitHubButton from '../GitHubButton';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate= useNavigate();
  const [ formData, setFormData ] = useState({
    email:'',
    password: ''
  })
  const [showPassword,setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jwt-react.vercel.app/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const result = await response.json();
      localStorage.setItem("token",result.token)
      console.log(result);
      navigate("/dashboard");
    } catch(error){
      console.error(error.message);
    } finally {
        setFormData({
          name: "",
          email: "",
          password: ""
        })
    }
  }


  return (
    <div className='container-login'>
      <div className="login-box">
      <h1 className='login-head'>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Show Password" onChange={handleShowPassword} checked={showPassword} />
        </Form.Group>
        <div className="btn">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
        <div className="gauth">
          <GoogleButton />
          <GitHubButton />
        </div>
      </Form>
        <div className="mt-3">
          <Link to="/forgot-password" className='fgtxt'>Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
