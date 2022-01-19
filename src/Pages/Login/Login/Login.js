import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { signWithGoogle,handleRegistration,handleEmailChange,handlePassWordChange}=useFirebase();
    return (
        <div>
            <Container className='mb-4'>
                <Row>
                    
                <Col className='pt-5'>
                        <div className='login-form'>
                            <h3 className='pt-2'> Create Your New Account</h3>
                            <Form onSubmit={handleRegistration}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onBlur={handleEmailChange} className='w-75 mx-5' placeholder="Enter email address" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handlePassWordChange} className='w-75 mx-5' type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                                <br />


                            </Form>
                            <div className='p-4'>
                                <p>Sign in with your social media account</p>
                                <Button onClick={ signWithGoogle} variant="primary" type="submit">
                                    Gmail
                                </Button>
                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Login;