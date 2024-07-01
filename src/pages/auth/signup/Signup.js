import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Signup.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubButton from '../GitHubButton';
import GoogleButton from '../GoogleButton';

const Signup = () => {
  const navigate= useNavigate();
  const [ formData, setFormData ] = useState({
    email:'',
    name: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const result = await response.json();
      console.log(result);
      navigate("/login");
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
    <div className='container-signup'>
      <div className="signup-box">
      <h1 className='signup-head'>Signup</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleInputChange}/>
        </Form.Group>

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
          <Form.Check type="checkbox" label="Show Password" onChange={handleShowPassword} checked={showPassword}/>
        </Form.Group>
        <div className="btn">
        <Button variant="primary" type="submit">
          Signup
        </Button>
        </div>
        <div className="gauth">
          <GoogleButton />
          <GitHubButton />
        </div>
      </Form>
      </div>
    </div>
  )
}

export default Signup
