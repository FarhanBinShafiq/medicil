import React from 'react';
import about from '../../../images/About-Us/about.png'
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div>
            <Container id="about" fluid className="pt-4">

                <Row >
                    <Col lg={6}><img src={about} alt='about-imge' className='img-fluid'></img></Col>
                    <Col className='aboutus' lg={6}>
                       <h4 > <span className='text-info text-ali'>ABOUT</span> US</h4>
                       <h3>We Are Specialize in Medical Diagnositics</h3>
                       <p >Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</p>
                       <p><FontAwesomeIcon icon={ faChevronRight}/>  Pellentesque placerat, nisi congue vehicula efficitur.</p>
                       <p><FontAwesomeIcon icon={ faChevronRight}/>  Pellentesque placerat, nisi congue vehicula efficitur.</p>
                       <p><FontAwesomeIcon icon={ faChevronRight}/>  Phasellus mattis vitae magna in suscipit. Nam tristique posuere sem, mattis molestie est bibendum. </p>

                       <button className='btn-about'>Read More <FontAwesomeIcon icon={ faChevronRight}/> </button>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default AboutUs;