import { Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { CourseContext } from '../Home/Home';
import aboutImage from '../img/about.jfif'
import './About.css'

const About = () => {
    const [courses] = useContext(CourseContext);
    const history = useHistory();
    const handleBrowse = () =>{
        history.push('/services')
    }
    return (
        <div className='about-bg'>
            <Container fixed>
            <Grid className='about-container' container spacing={6}>
                <Grid item sm={12} md={6}>
                    <div>
                        <figure>
                            <img style={{ width: '500px' }} src={aboutImage} alt="About" />
                        </figure>
                    </div>
                </Grid>

                <Grid item sm={12} md={6}>
                    <h2>The world’s largest selection of online courses</h2>
                    <p>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone</p>
                    <p> Right Now We have {courses.length} Courses</p>
                    <Button onClick={handleBrowse} className='btn-capitalize' size='large' color='info' variant="contained"> Browse Courses </Button>
                </Grid>

            </Grid>

        </Container>
        </div>
    );
};

export default About;