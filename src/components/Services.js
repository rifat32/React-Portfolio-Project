import React, {Component} from 'react';
import ServiceSingle from './SmallComponent/ServiceSingle';
import ServiceObj from './SmallComponent/ServiceObj';

class Services extends Component {
state = {
  services : ServiceObj
}
  render(){
    return (
      <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>Services</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
       {
         this.state.services.map(el => {
           return <ServiceSingle key={el.id} info={el}/>
         })
       }
        
       
       
      </div>

    </div>
  </section>
  )
  }
   
}

export default Services
