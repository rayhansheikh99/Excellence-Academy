import React, { useEffect, useState } from 'react';
import DemoCourses from '../DemoCourses/DemoCourses';
import Grow from '../Growup/Grow';
import Mentors from '../Mentors/Mentors';
import './home.css'


// data fetch and card show 
const Home = () => {

    const [courses,setCourses] = useState([]);

    useEffect(()=> {
            fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0,4)))
    },[]);

    return (
        <div className='home-container mb-3'>
            <div>
                <Grow/>
            </div>
            <div>
               <Mentors/>
            </div>
            <div className='mb-3 mt-4'><h1 className='title-design'>Our Courses</h1></div>

            <div className="row row-cols-1 row-cols-md-2 g-5 pb-3 mt-3">
                {
                    
                    courses.map(course=> <DemoCourses key={course.key} course={course}/>)
                    

                }
            </div>
            </div>
    );
};

export default Home;