import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Department.css'


const Department = (props) => {
    const { title, img, desc } = props.department;
    return (
        <>
            <div className='d-inline-flex department-card'>
               <Col lg={1} className='align-items-center'>
                   <img src={img}></img>
               </Col>
                <Col>

                    <p>{title}</p>
                    <p>{desc}</p>


                </Col>
            </div>
        </>
    );
};


export default Department;