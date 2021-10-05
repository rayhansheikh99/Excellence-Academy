import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../images/Learning-pana.png'
import img1 from '../../images/bag.png'
import img2 from '../../images/school.png'
import img3 from '../../images/3rd.png'
import img4 from '../../images/4th.png'
import './grow.css'

const Grow = () => {
    return (
        <div>
            <Container>
            <Row className='mt-5'>
                <Col className='mt-5' xs={6}>
                        <div className='grow-title'>
                        <h1><span className='text-primary'>Grow</span> Above All</h1>
                        <p>Click your desired option and <span className='text-primary'>get started!</span></p>
                        </div>
                        <div className='d-flex'>
                        <Row xs={1} md={2} className="g-4">
                          
                                <Col>
                                <Card className='grow-card'>
                                    <Card.Img className='w-50 grow-img' variant="top" src={img1} />
                                    <Card.Body>
                                    <Card.Text className='text-center'>Class 9-10</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col> 
                        </Row>
                        <Row xs={1} md={2} className="g-4">
                          
                                <Col>
                                <Card className='grow-card'>
                                    <Card.Img className='w-50 grow-img' variant="top" src={img2} />
                                    <Card.Body>
                                    <Card.Text className='text-center'>Class 11-12</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col> 
                        </Row>
                        <Row xs={1} md={2} className="g-4">
                          
                                <Col>
                                <Card className='grow-card'>
                                    <Card.Img className='w-50 grow-img' variant="top" src={img3} />
                                    <Card.Body>
                                    <Card.Text className='text-center'>Admission Test</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col> 
                        </Row>
                        <Row xs={1} md={2} className="g-4">
                          
                                <Col>
                                <Card className='grow-card me-5'>
                                    <Card.Img className='w-50 grow-img' variant="top" src={img4} />
                                    <Card.Body>
                                    <Card.Text className='text-center'>IBA</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col> 
                        </Row>
                        </div>
                </Col>
                <Col xs={6}> <img className='w-100 grow-img-right' src ={img} alt=''></img></Col>
             </Row>
            </Container>
        </div>
    );
};

export default Grow;