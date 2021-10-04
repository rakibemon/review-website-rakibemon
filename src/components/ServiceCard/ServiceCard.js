import React from 'react';
import './ServiceCard.css'
const ServiceCard = (props) => {
    const {img, name, instractor, price} = props.course
    return (
        <div className='service-card'>
            <figure>
                <img className='service-img' src={img} alt={name +' course'} />
            </figure>
            <div className="service-details">
                <h5>{name}</h5>
                <p> by <b>{instractor}</b> </p>
                <p>Price : $ {price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;