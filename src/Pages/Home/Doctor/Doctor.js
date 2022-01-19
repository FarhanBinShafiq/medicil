import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Doctor.css'
const Doctor = (props) => {
    const {name,designation,department,img}=props.user;
    return (
  
           
             <Card className='card'>
                          <Card.Img variant="top" src={img} className='img-top '/>
                        <Card.Body>
                      
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{designation}</Card.Text>
                            <Card.Text>{department}</Card.Text>
                            
                           <Button href='/contact' className='btn'>Get an Appointment</Button>
                        </Card.Body>
                         
                         
                    </Card>
           
       
    );
};

export default Doctor;