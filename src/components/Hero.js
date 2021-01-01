import React from 'react'
import Typed from 'react-typed';

function Hero() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data_aos="fade-in">
          <h1>RIFAT AL-ASHWAD</h1>
          
          <p>I'm <Typed
                    strings={["Frontend Web Developer", "Backend Web Developer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                </p>

          
        </div>
      </section>
    )

}

export default Hero
