import React from 'react';
import { Breadcrumb, Col, Container, Row, Form, Button } from 'react-bootstrap';


import './Contact.css'


const Contact = () => {



    return (
        <>


          
                <h2 className='text-warning'>Contact Us</h2>
                <Breadcrumb className='contact-top'>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/contact" >Contacts</Breadcrumb.Item>
                </Breadcrumb>
           


            <Container>


                <Row >

                    <Col className='aboutus' lg={6}>
                        <h4 > <span className='text-info '>Contact</span></h4>
                        <h3>Get In Touch With Us</h3>
                        <p > Address: Stability LTD., Old Town Avenue, New York, USA 23000</p>
                        <p>Phonee : +1700 124-5678,+1700 124-5678 </p>



                    </Col>

                    <Col>

                        <div className='contact-form p-3 mb-4'>
                            <h3 > Send Us Your Messege</h3>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" className='w-75 mx-5 ' placeholder="Enter email address" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" className='w-75 mx-5 ' placeholder="Enter Your Full Name" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" className='w-75 mx-5' rows={3} placeholder="Write Your Message here" />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit"> Send</Button>

 


                            </Form>

                        </div>

                    </Col>


                </Row>

            </Container>
        </>
    );
};

export default Contact;