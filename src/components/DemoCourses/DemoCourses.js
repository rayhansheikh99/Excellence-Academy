import React from 'react';
import { Button } from 'react-bootstrap';
import './democourses.css'

const DemoCourses = (props) => {
    const {title, image, duration, exam, subject, liveClass} = props.course
    return (
        <div className=''>
             <div className="col ">
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
                </div>
        </div>
    );
};

export default DemoCourses;