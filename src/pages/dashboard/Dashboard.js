import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = await response.json();
        console.log("API Response -- ", result);
        setUsers(result);
      } catch (error) {
        console.log("Error fetching users -- ", error);
      }
    };
    if (token) {
      fetchUsers();
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

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
                {Array.isArray(users) && users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No users found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
