import { Button, Container, Grid, Input } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../img/white logo.png'
import { Box } from '@mui/system';
const ariaLabel = { 'aria-label': 'description' };

const Footer = () => {
    return (

        <footer className='footer'>
            <Container fixed>
                <Grid container spacing={6}>
                    <Grid item xl={3} lg={5} md={5} sm={6}>
                        <div>
                            <Link to='/home'> <img src={logo} alt="Logo" /></Link>
                            <p className='thin-letter' style={{ margin: '30px 0px' }}>The automated process starts as soon as your clothes go into the machine.</p>
                            <Box sx={{ display: 'flex' }}>
                                <Link className='social-link' to='https://www.facebook.com/aronno.avro/'> <i className="fab fa-facebook"></i> </Link>
                                <Link className='social-link' to='https://www.linkedin.com/in/md-rakib-istiak-82243b1ba/'> <i className="fab fa-linkedin-in"></i> </Link>
                                <Link className='social-link' to='https://github.com/rakibemon'> <i className="fab fa-github"></i> </Link>
                            </Box>
                        </div>
                    </Grid>

                    <Grid item xl={3} lg={3} md={4} sm={5}>
                        <div>
                            <h5> Contact </h5>
                            <ul className='list-unstyled thin-letter'>
                                <li><i className="fas fa-map-marker-alt me-2 fs-5"></i> House#1062, Banani Model Town, Dhaka</li>
                                <li><i className="fas fa-envelope me-2 fs-5"></i>rakibemon03@gmail.com</li>
                                <li> <i className="fas fa-phone-alt me-2 fs-5"></i>01521248316</li>
                            </ul>
                        </div>
                    </Grid>

                    <Grid item xl={2} lg={3} md={4} sm={5}>
                        <div>
                            <h5> Links </h5>
                            <ul className='list-unstyled thin-letter'>
                                <Link className='link' to='/home'> <li> Home </li> </Link>
                                <Link className='link' to='/about'> <li> About </li> </Link>
                                <Link className='link' to='/services'> <li> Services </li> </Link>
                                <Link className='link' to='/contact'> <li> Contact </li> </Link>
                            </ul>
                        </div>
                    </Grid>


                    <Grid item xl={4} lg={5} md={5} sm={6}>
                        <div>
                            <h5 style={{ fontWeight: '500' }}> Newsletter</h5>
                            <p className='thin-letter'>Subscribe our newsletter to get updates.</p>
                            <Input defaultValue="Enter Your E-mail" inputProps={ariaLabel} />
                            <br /> <br />
                            <Button className='btn-capitalize' variant="contained">Subscribe</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>

    );
};

export default Footer;