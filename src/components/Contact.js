import React from 'react'

function Contact() {
    const gLocationStyle = {
        border:'0',
        width:'100%',
        height:'290px'
     }
    return (
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>30/10 Sultangoanj Rayer Bazar, Dhaka 1207 York, Bangladesh</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>drrifatalashwad0</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+880 1771034383</p>
              </div>

              <iframe title="gMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.344669331615!2d90.36248150004523!3d23.7412331884819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf59a9d5575b%3A0xe18e297d0e5dff3f!2zV2FyZC00NCwg4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1609326388584!5m2!1sbn!2sbd" width="600" height="450" frameBorder="0" style={gLocationStyle}allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>

          </div>

          <div  className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form name="myForm" action="//masterrifat.000webhostapp.com/contactMail"  method="post" className="php-email-form" target="_blank">
            <p id='success' className='text-center text-success d-none'>
                  I will reply soon.
            </p>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <p id='nameErr' className='text-danger d-none'>Name Must Be Filled Out</p>  
                </div>
              
                
                <div className="form-group col-md-6">
                
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <p id='emailErr' className='text-danger d-none'>
                  Invalid Email
                </p>
                </div>
                
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <p id='messageErr' className='text-danger d-none'>
                Message can not be empty
              </p>
              </div>
              
              
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
            {/* <iframe  name="contactf" src="//masterrifat.000webhostapp.com/contactMail" className='d-none' title="Contact"></iframe> */}
          </div>

        </div>

      </div>
    </section>
    )
}

export default Contact
