import React, {Component} from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Scripts from './MainScript';



class MainContent extends Component {
  componentDidMount() {
    if(window){
      Scripts();
    }
  }
  render(){
    return (
      <> 
  <Hero/>
  
  <About/>
  <Facts/>
  <Skills/>
  <Resume/>
  <Portfolio/>
  <Services/>
  <Testimonial/>
  <Contact/>
  
      </>
    );
  }
  
}

export default MainContent;
