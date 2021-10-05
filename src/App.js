import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact';
import { createContext } from 'react';
import useData from './components/LoadData/LoadData';


export const CourseContext = createContext(['course'])

function App() {
  const [courses] = useData()
  return (
    <CourseContext.Provider value={[courses]}>
      <div>
        <Router>
          <Switch>
            <Route exact path='/home'>
              <Header />
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/about'>
              <Header />
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path='/services'>
              <Header />
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path='/contact'>
              <Header />
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route exact path='/'>
              <Header />
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>

    </CourseContext.Provider>

  );
}

export default App;
