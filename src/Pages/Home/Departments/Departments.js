import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import department from '../../../images/department/department.png'
import Department from '../Department/Department';
import './Departments.css'

const Departments = () => {
  
    const [departments,setDepartments]=useState([]);
    useEffect(()=>{
        fetch('./departments.json')
        .then(res=>res.json())
        .then(data=>setDepartments(data))
    },[])

    return (
        <div>

            <Container id="department" className="pt-4">
            

                <Row  className=''>

                    <Col className='aboutus' lg={6}>
                    <h5 >  OUR <span className='text-info'>DEPARTMENTS</span> </h5>
                        <h3>We Take Care Of Your Life Healthy Healthy</h3>
                      

                        {
                            departments.map(department=><div className='p-2 departments'><Department department={department}></Department></div>)
                        }


                    </Col>

                    <Col lg={6}><img src={department } alt='about-imge' className='img-fluid pt-5 m-4'></img></Col>
                </Row>

            </Container>

        </div>
    );
};

export default Departments;