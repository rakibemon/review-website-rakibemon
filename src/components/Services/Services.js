import React from 'react';
import useData from '../LoadData/LoadData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    // Load data from database to display
    const [courses] = useData();
    return (
        <div>
            <div className='service-container'>
                {
                    courses.map(course => <ServiceCard key={course.id} course={course}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;