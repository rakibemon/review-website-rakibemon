import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css'
const NotFound = () => {
    const history = useHistory()
    const goHomePage = () =>{
        history.push('/home')
    }
    return (
        <div className='not-found'>
            <h1> 404 </h1>
            <h2> Page not found </h2>
            <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
            <Button onClick={goHomePage} variant='contained' size='large'> Go to Home </Button>
        </div>
    );
};

export default NotFound;