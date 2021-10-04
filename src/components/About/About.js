import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import  './about.css';
import img1 from '../../images/academy.jpg'
import img2 from '../../images/Goal.jpg'

const About = () => {
    return (
        <div>
            {/* About us section  */}
            <Container className='about-part'>
             <Row>
                <Col xs={6}>
                        <img className='img1 w-75' src ={img1} alt=''></img>
                </Col>
                <Col xs={6}>
                    <h1>Why Excellence Academy ?</h1>
                    <p className='paragraph'>Bangladesh is a small country of South-East Asia with so many problems. One of the most severe problems of this country is ‘Quality Education’. We are lacking of quality teachers, modern teaching pedagogy and use of technology in education. Especially, the quality of ‘Science Education Sector’ of our country is very poor. So much money, time and resources are wasted for getting proper education.</p>
                </Col>
             </Row>
             <Row className='mt-5'>
                <Col xs={6}>
                        <h1>Our Goal</h1>
                        <p className='paragraph'>Our goal is to provide quality education to all students of Bangladesh at an affordable cost. We want to simplify learning with the use of modern technology. We are now focusing on the Science Education of Secondary and Higher Secondary levels. We are trying to build new technology, recreate the conventional teaching method and bring new ideas in the education sector of Bangladesh. Most importantly, we are bringing the ‘Brightest Minds of our Nation’ in teaching, whom we call the “Master Teachers”. They are teachers not by profession, they are teachers by choice.</p>
                </Col>
                <Col xs={6}> <img className='w-75' src ={img2} alt=''></img></Col>
             </Row>
            </Container>
        </div>
    );
};

export default About;