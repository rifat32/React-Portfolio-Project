import React , {Component} from 'react'
import ProgressBar from './SmallComponent/Progress'
import {col1,col2} from './SmallComponent/SkillObj'

class Skills extends Component {
    state = {
        skills_col_1: col1,
        skills_col_2: col2
    }
    render(){
        
        return (
            <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row skills-content">
      <div className="col-lg-6" data-aos="fade-up">
  
      {this.state.skills_col_1.map((el,indx) => {
      return  <ProgressBar key={indx} info={el}/>
      })}
      
    
      
                </div>
      
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      
                {this.state.skills_col_2.map((el,indx) => {
      return  <ProgressBar key={indx} info={el}/>
      })}
                
      
                </div>
      
              </div>
      
            </div>
          </section>
        )
    }
    
}

export default Skills
