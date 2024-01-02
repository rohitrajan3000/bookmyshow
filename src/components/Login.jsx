import React from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import LoginImg from '../assets/1.png';

export default function Login() {
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
                                        <Form.Control type="email" placeholder="Enter email" />
                                       
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                    <Button href="/home" variant="primary" type="submit" className="Login-bt">
                                        Login
                                    </Button>
                                    <div style={{display: 'flex', justifyContent:'center', marginTop: 25}}>New here? Please <a href="/signup"> signup</a></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}