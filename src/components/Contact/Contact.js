import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import './Contatc.css'
import { Box } from '@mui/system';
const Contact = () => {
    return (
        <Container fixed>
            <Grid container spacing={6} className='mt-4'>
                <Grid item xs={12} md={8}>
                <h4> Get in Touch </h4>
                <form>
                    <textarea className='form-control' rows="8" cols="80" placeholder='Enter message'></textarea> <br/>
                <Box sx={{display:'flex'}}>
                    <input className='form-control me-3' type="text" name="name" placeholder='Enter your name' />
                    <input className='form-control' type="email" name="email" placeholder='Enter your email' />
                </Box>
                <br />
                    <input className='form-control' type="text" name="email" placeholder='Enter subject' />
                    <br />
                    <Button variant='outlined' className='btn-contact' color='info' size='large'> S E N D</Button>
                </form>
                </Grid>

                <Grid item xs={12} md={4}>
                    <div>
                        <h5> Contact </h5>
                            <ul className='list-unstyled thin-letter'>
                                <li><i className="fas fa-map-marker-alt me-2 fs-5"></i> House#1062, Banani Model Town, Dhaka</li>
                                <li><i className="fas fa-envelope me-2 fs-5"></i>rakibemon03@gmail.com</li>
                                <li> <i className="fas fa-phone-alt me-2 fs-5"></i>01521248316</li>
                            </ul>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;