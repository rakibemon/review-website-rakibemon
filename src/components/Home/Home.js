import { Button, Container, Grid } from '@mui/material';
import HomeCard from '../HomeCard/HomeCard';
import useData from '../LoadData/LoadData';
import './Home.css';

const Home = () => {

    // Load data from database
    const [courses] = useData()
    const someCourse = courses.filter(course => course.id % 2 === 0);
    return (
        <div className='home-bg'>
            <Container fixed>
                <Grid container className='hero-section'>
                    <Grid item xs={12} md={12}>
                        <h1 className='hero-title'>Learn new skills online <br /> with top educators</h1>
                        <p>Learn 100% online with world-class universities <br />  and industry experts.
                        </p>
                        <Button className='btn-capitalize' size="large" variant="contained">Join Us</Button>
                    </Grid>
                </Grid>
                <div className="home-courses">
                    {
                        someCourse.map(course => <HomeCard key={course.id} course={course}></HomeCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;