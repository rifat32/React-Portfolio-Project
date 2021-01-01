import React, {Component} from 'react'
import TestimonialSingle from './SmallComponent/TestimonialSingle';
import TestimonialObject from './SmallComponent/TestimonialObject';


class Testimonial extends Component {
  state = {
    testimonials: TestimonialObject
  }

  render(){
    
    
    return (
      <section id="testimonials" className="testimonials section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Testimonials</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
     
     
      <div  id="base">
      {
     this.state.testimonials.map(el => {
       return <TestimonialSingle key={el.id} info={el}/>
     })
   } 
</div>

      <div id='customize-thumbnails' className='text-center mb-2'>
      {
     this.state.testimonials.map(el => {
       return <img style={{width:'100px',cursor:'pointer'}} key={el.id} src={el.img} className="testimonial-img" alt="Person"/>
     })
   }
      </div>
     
      <div className='text-center  d-none' >
      <div id='customize-controls' >
      <button className='btn btn-primary btn-small'>Prev</button>
      <button className='btn btn-primary btn-small'>Next</button>
        
      </div>
      </div>
      <div className='text-center'>
      <button className='btn btn-primary btn-small' id='customize-toggle'> </button>
      </div>
      
  

    </div>
    
  </section>
  )
  }
   
}

export default Testimonial
