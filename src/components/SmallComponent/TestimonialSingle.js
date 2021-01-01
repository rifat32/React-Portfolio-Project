import React from 'react'

function TestimonialSingle(props) {
    const {quote,img,name,job} = props.info;
    return (
        <div className="testimonial-item" data-aos="fade-up">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              {quote}
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={img} className="testimonial-img" alt="Person"/>
            <h3>{name}</h3>
            <h4>{job}</h4>
          </div>
    )
}

export default TestimonialSingle
