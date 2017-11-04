import React from 'react';
import Contact from 'Contact';
import FadeIn from 'react-fade-in';

var Home = (props) => {
  return (
    <FadeIn>
      <div className='grid-container'>
        <div className='header'>
          <img src={require('../images/portfolio-image.png')} />
          <h1>Alec Jandorek</h1>
          <h3>Web Developer</h3>
        </div>
        <hr />
        <p>Hi There I'm Alec! I'm a full stack web developer living in Austin, TX.</p>
        <p>Take a look through my projects and feel free to read through some of my blog posts. Interested in chatting about an upcoming project? Feel free to reach out to me through one of the venues below. I look forward to hearing from you!</p>
        <hr />
        <Contact />
      </div>
    </FadeIn>
  );
}

export default Home;

