import React from 'react';
import Contact from 'Contact';


var Home = (props) => {
    return (
        <div className='grid-container'>
            <div className='header'>
                <img src={'http://i.imgur.com/6qcPnAr.png'} />
                <h1>Alec Jandorek</h1>
                <h3>Web Developer</h3>
            </div>
            <hr />
            <p>Hi There I'm Alec! I'm a web developer and marketer living in Austin, TX.</p>
            <p>Take a look through some of my projects and feel free to read through some of my blog posts. Interested in chatting about an upcoming project? Feel free to reach out to me through one of the venues below. I look forward to hearing from you!</p>
            <hr />
            <Contact />
        </div>
    );
}

export default Home;

