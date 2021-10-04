import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {img, name, instractor, price} = props.course
    return (
        <div className='service-card'>
            <figure>
               <Link to='/home'> <img className='service-img' src={img} alt={name +' course'} /></Link>
            </figure>
            <div className="service-details">
                <h5>{name}</h5>
                <p> by <b>{instractor}</b> </p>
                <p>Price : $ {price}</p>
                <Button className='btn-capitalize service-btn' variant='outlined' color='warning'> Find Out More</Button>
            </div>
        </div>
    );
};

export default ServiceCard;