import React, { useEffect, useState } from 'react';
import DemoCourses from '../DemoCourses/DemoCourses';
import './home.css'

const Home = () => {

    const [courses,setCourses] = useState([]);

    useEffect(()=> {
            fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0,4)))
    },[]);

    return (
        <div className='home-container mb-3'>
            <div className="row row-cols-1 row-cols-md-2 g-5 card-design pb-3">
                {
                    
                    courses.map(course=> <DemoCourses key={course.key} course={course}/>)
                    

                }
            </div>
            </div>
    );
};

export default Home;