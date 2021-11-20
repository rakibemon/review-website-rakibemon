import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const goServices = () => {
        history.push('/services')
    };

    const [serviceDetails, setServiceDetail] = useState([]);
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, []);

    const [singleCourse, setSingleCourse] = useState({})

    // find out the service that matched
    useEffect(() => {
        if(serviceDetails.length){
            const foundCourse = serviceDetails.find(course => course.id === parseInt(serviceId));
            setSingleCourse(foundCourse)
        }
    }, [serviceDetails,serviceId]);
    
    const {name,img,description,price} =singleCourse || {};
    return (
        <div className='single-course-detail'>
            <div className='single-course-info'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price : <b style={{color:'tomato'}}>$ {price}</b></p>
                <Button onClick={goServices} variant='contained'> Go Services </Button>
            </div>
        </div>
    );
};

export default ServiceDetail;