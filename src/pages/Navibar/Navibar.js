import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./Navibar.css"

const Navibar = () => {
  const token = localStorage.getItem("token");
  const navigate= useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      <Navbar bg={token ? "white": "dark"} expand="lg" data-bs-theme={token ? "light" : "dark"} style={{fontFamily: "Bebas Neue"}}>
        <Container>
          <Navbar.Brand as={Link} to="/login" style={{fontSize: "25px", fontWeight:"400"}}>{token? "Logged-In": "Not-LoggedIn"} |</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {token?(
              <>
                <Nav.Link as={Link} to="/dashboard" className='nav-link' style={{fontSize: "25px"}}>Dashboard</Nav.Link>
                <Nav.Link className='nav-link' onClick={handleLogout} style={{fontSize: "25px"}}>Logout</Nav.Link>
              </>
            ):(
              <>
                <Nav.Link as={Link} to="/login" className='nav-link' style={{fontSize: "25px"}}>Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className='nav-link' style={{fontSize: "25px"}}>Signup</Nav.Link>
              </>
            )}
            
          </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar
