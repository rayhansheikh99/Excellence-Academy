import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './democourses.css'

const DemoCourses = (props) => {
    const {title, image, duration, exam, subject, liveClass} = props.course
    return (
        // grid card design for courses 
        <div className=''>
            
                <Card className="card h-100 card-element card-design ">
                    <Card.Img className="card-img-top img-course mx-auto d-block" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Total Subject:</b> {subject}</ListGroupItem>
                        <ListGroupItem><b>Total Live Class:</b> {liveClass}</ListGroupItem>
                        <ListGroupItem><b>Total Class Duration:</b> {duration}</ListGroupItem>
                        <ListGroupItem><b>Exam: </b>{exam}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Button className='px-5 btn-design'>Explore Course</Button>
                    
                    </Card.Body>
                </Card>
        </div>
    );
};

export default DemoCourses;