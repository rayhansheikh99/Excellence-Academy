import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './democourses.css'

const DemoCourses = (props) => {
    const {title, image, duration, exam, subject, liveClass} = props.course
    return (
        // grid card design for courses 
        <div className=''>
             {/* <div className="col ">
                    <div className="card h-100 card-element card-design ">
                    <img src={image} className="card-img-top img-course mx-auto d-block" alt="..."/>
                    <div className="card-body text-ele">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text"><b>Total Subject:</b> {subject}</p>
                        <p className="card-text"><b>Total Live Class:</b> {liveClass}</p>
                        <p className="card-text"><b>Total Class Duration:</b> {duration}</p>
                        <p className="card-text"><b>Exam: </b>{exam}</p>
                        
                    </div>
                    <div className="card-footer">
                        <Button className='px-5 btn-design'>Explore Course</Button>
                    </div>
                    </div>
                </div> */}
                <Card className="card h-100 card-element card-design " style={{ width: '28rem' }}>
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