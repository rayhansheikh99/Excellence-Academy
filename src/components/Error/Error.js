import React from 'react';
import './error.css'
import error from '../../images/404_page_cover.jpg'

const Error = () => {
    return (
        // error message show 
        <div className='error-container'>
            <img src={error} alt=''></img>
        </div>
    );
};

export default Error;