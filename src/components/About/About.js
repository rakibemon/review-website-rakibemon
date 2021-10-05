import { Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AboutCard from '../AboutCard/AboutCard';
import aboutImage from '../img/about.jfif'
import useImgData from '../LoadData/LoadImg';
import instractor from '../img/instractor.jfif'
import './About.css'
import { CourseContext } from '../../App';

const About = () => {
    const [courseImg] = useImgData()

    // Load data using useContext
    const [courses] = useContext(CourseContext);
    const history = useHistory();

    // handle button to move service page
    const handleBrowse = () => {
        history.push('/services')
    }
    return (
        <div>
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
            <h2 className="text-center mt-4"> Explore top Categorise</h2>
            <Grid container columnSpacing={0} rowSpacing={6} className='mt-4'>
                {
                    courseImg.map(img => <AboutCard key={img.id} img={img}></AboutCard>)
                }
            </Grid>
            <div className='about-bg mt-5 py-4'>
                <Container fixed>
                    <Grid container spacing={6}>
                        <Grid item sx={12} md={6} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h1>Become an Instructor</h1> <br />
                                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                                <ul>
                                    <li>Techniques to engage effectively with vulnerable children and young people.</li><br />
                                    <li>Join millions of people from around the world learning together.</li> <br />
                                    <li>Became a Instractor to gain more knowledge, teach your student also make some money</li>
                                </ul>
                                <Button className='btn-capitalize' variant='contained' size='large'> Become a Instructor</Button>
                            </div>
                        </Grid>
                        <Grid item sx={12} md={6}>
                            <div>
                                <figure>
                                    <img src={instractor} alt="Instractor" />
                                </figure>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default About;