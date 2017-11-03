import React from 'react';
import FontAwesome from 'react-fontawesome';

var Contact = () => {
    return (
            <div className='grid-container'>
                <div>
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/alecjandorek/" target="_blank">
                            <FontAwesome
                                className="icon"
                                name='linkedin'
                                size='2x'
                            />
                        </a>
                        <a href="https://github.com/ajandorek" target="_blank">
                            <FontAwesome
                                className="icon"
                                name='github'
                                size='2x'
                            />
                        </a>
                        <a href="mailto:ajandorek@gmail.com">
                            <FontAwesome
                                className="icon"
                                name='envelope'
                                size='2x'
                            />
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Contact;