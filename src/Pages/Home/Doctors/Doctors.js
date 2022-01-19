import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor.js'
import './Doctors.css'

const Doctors = () => {
 
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    return (
        <>
           <Container id="doctors"  className='d-flex justify-content-center pt-5'>
                 
               <Row>
               <h2 className='team-title'>Docter’s In The Medical Sciences</h2>
                   {
                       users.map(user=>
                           <Col lg={3} md={6} sm={12} className='pt-3'>
                             <Doctor key={user.id} user={user}></Doctor>
                           </Col>
                       )
                   }    
               </Row>  

           </Container>
        </>
    );
};

export default Doctors;