import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Contact from 'Contact';

class ContactForm extends Component {

  render() {
    return (
      <FadeIn>
        <div className='grid-container'>
          <p className='text-center header'>Interested in chatting? Please feel free to contact me below!</p>
          <Contact />
          <div className="container__form">
            <form action='/send-email' method="get" className='input-group-rounded'>
              <label>Name</label>
              <input name='name' className='input-group-field' />
              <label>Email</label>
              <input name='email' className='input-group-field' />
              <label>Subject</label>
              <input name='subject' className='input-group-field' />
              <label>Message</label>
              <textarea name='message' className='input-group-field' />
              <button className='button hollow'>Submit</button>
            </form>
          </div>
        </div>
      </FadeIn>
    )
  }
}

export default ContactForm;