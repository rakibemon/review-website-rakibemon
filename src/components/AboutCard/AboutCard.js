import { Grid } from '@mui/material';
import React from 'react';
import './AboutCard.css'
const AboutCard = (props) => {
    const { img, name } = props.img;
    return (
        <Grid justifySelf='center' item xs={12} md={4} lg={3}>
            <div className='text-center about-img-container'>
                <figure>
                    <img className='about-img' src={img} alt="CourseImage" />
                    <h5 className='centered'> {name} </h5>
                </figure>
            </div>
        </Grid>

    );
};

export default AboutCard;