import React from 'react';

var ContactForm = () => {
    return (
        <div className='grid-container'>
            <p>Interested in chatting? Please feel free to contact me below!</p>
            <div className="container__form">
                <form className='input-group-rounded'>
                    <label>Name</label>
                    <input className='input-group-field'/>
                    <label>Email</label>
                    <input className='input-group-field'/>
                    <label>Subject</label>
                    <input className='input-group-field'/>
                    <label>Message</label>
                    <textarea className='input-group-field'/>
                    <button className='button hollow'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;