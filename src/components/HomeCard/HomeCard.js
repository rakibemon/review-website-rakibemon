import React from 'react';
import './HomeCard.css';
const HomeCard = (props) => {
    const { img, name, instractor, price } = props.course
    return (
        <div className='course-card'>
            <figure>
                <img className='course-img' src={img} alt={name + ' course'} />
            </figure>
            <div className="course-details">
                <h5 className='text-center'>{name}</h5>
                <p> by <b>{instractor}</b> </p>
                <p>Price : $ {price}</p>
            </div>
        </div>
    );
};

export default HomeCard;