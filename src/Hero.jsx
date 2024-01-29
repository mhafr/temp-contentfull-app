import React from 'react'
import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Deep v selfies tousled tilde neutra bespoke kale chips chartreuse.
            Deep v selfies chicharrones hot chicken snackwave thundercats pork
            belly irony biodiesel. Occupy cardigan godard vinyl. Tattooed
            iceland artisan forage direct trade. Disrupt kale chips locavore
            chillwave, paleo microdosing celiac.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="women and the browser" className='img' />
        </div>
      </div>
    </section>
  );
}

export default Hero