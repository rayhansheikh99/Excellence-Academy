import React, { useEffect, useState } from 'react';
import DemoCourses from '../DemoCourses/DemoCourses';
import './courses.css';


// fetch data here 
const Courses = () => {
    const [courses,setCourses] = useState([]);

    useEffect(()=> {
            fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[]);

    return (
        <div className='home-container mb-3 mx-5'>
                        <div className='mb-5'><h1 className="title">Our Courses</h1></div>

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
                {
                    // loop for data 
                    courses.map(course=> <DemoCourses key={course.key} course={course}/>)
                    

                }
            </div>
            </div>
    );
};

export default Courses;