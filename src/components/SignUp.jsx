
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import LoginImg from '../assets/1.png';

export default function SignUp() {
    const [email, setEmail] =useState('');

    
    

    const handleSubmit =() =>{
        localStorage.setItem('userEmail',email);
       
    }
    return (
        <div className="auth-container">
            <Container >
                <Row>
                    <Col className="inner-Container"><img src={LoginImg} height={290} />
                    </Col>
                    <Col className="inner-Container">
                        <Card style={{ width: '25rem', padding: 25 }}  >
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}
                                        value={email}/>
                                       
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    
                                    <Button variant="primary" type="submit" className="Login-bt" onClick={handleSubmit}>
                                        Login
                                    </Button >
                                    <div style={{display: 'flex', justifyContent:'center', marginTop: 25}}>
                                        Already have an account ? <a href="/login">Login</a></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}