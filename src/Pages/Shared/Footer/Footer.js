import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Footer.css'
import { FaFacebook, FaInstagram,} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            
            <Container className='p-2'>
                <Row>
                    <Col>
                    <img src={logo} alt='logo' className='logo'/>
                    </Col>
                    <Col>
                      <ul className='footer-li'>
                          <li><a href='/home'>Home</a></li>
                          <li><a href='/contact'>Contact</a></li>
                          <li><a href='/login'>Login</a></li>
                          
                      </ul>
                    </Col>
                    
                    <Col>
                      
                      <ul className='footer-socialMedia'>
 
                            <li><a href='https://www.facebook.com'><FaFacebook/></a></li>
                            <li><a href='https://www.instagram.com'><FaInstagram/></a></li>
                             
                      </ul>

                     </Col>

                </Row>
            </Container>


        </div>
    );
};

export default Footer;

