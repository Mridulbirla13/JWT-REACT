import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import './Dashboard.css'

const Dashboard = () => {

  const token = localStorage.getItem("token");
  const [users,setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchUsers = async () => {
      try{
        const response = await fetch("https://jwt-node.onrender.com/api/users",{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        const result = await response.json();
        console.log("DATA -- ",result)
        setUsers(result);
      } catch(error){
        console.log(error)
      }
    }
    if(token)
      fetchUsers();
    else{
      navigate("/login")
    }
  },[token, navigate]);

  console.log("users -- ", users);
  return (
    <div className='container-dashboard'>
      <div className="dashboard-box">
      <Row>
        <Col>
          <h1 className='dashboard-head'>Dashboard</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user)=>(
                <tr key = {user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Dashboard
