import { Grid } from '@mui/material';
import React from 'react';
import './Instractor.css'

const Instractor = (props) => {
    const {name,designation,course,img} = props.instractor
    return (
        <Grid item xs={12} md={6} lg={3} >
            <div className='single-instractor'>
                <figure>
                    <img src={img} alt={name + " Instractor"} />
                </figure>
                <div className='instractor-info'>
                    <h5 style={{color:'tomato'}}>{name}</h5>
                    <p>{designation}</p>
                    <small>of</small>
                    <p> <b>{course}</b> </p>
                </div>
            </div>
        </Grid>
    );
};

export default Instractor;