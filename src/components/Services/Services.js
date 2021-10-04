import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    return (
        <div>
               <div className='service-container'>
               {
                   courses.map(course=> <ServiceCard key={course.id} course={course}></ServiceCard>)
               }
               </div>
        </div>
    );
};

export default Services;