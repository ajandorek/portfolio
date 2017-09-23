import React from 'react';

var ContactForm = () => {
    return (
        <div>
            <p>Interested in chatting? Please feel free to contact me below!</p>
            <form>
                <label>Name</label>
                <input />
                <label>Email</label>
                <input />
                <label>Subject</label>
                <input />
                <label>Message</label>
                <textarea />
                <button className='button hollow'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;