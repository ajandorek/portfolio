import React from 'react';

var ContactForm = () => {
    return (
        <div className='grid-container'>
            <p className='text-center header'>Interested in chatting? Please feel free to contact me below!</p>
            <div className="container__form">
                <form action='/send-email' method="post" className='input-group-rounded'>
                    <label>Name</label>
                    <input name='name' className='input-group-field'/>
                    <label>Email</label>
                    <input name='email' className='input-group-field'/>
                    <label>Subject</label>
                    <input name='subject' className='input-group-field'/>
                    <label>Message</label>
                    <textarea name='message' className='input-group-field'/>
                    <button className='button hollow'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;