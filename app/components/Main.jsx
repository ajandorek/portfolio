import React from 'react';
import Nav from 'Nav';
import FadeIn from 'react-fade-in';

var Main = (props) => {
    return (
        <div>
            <Nav />
            <div className='row'>
                <div className='columns medium-6 large-8 small-centered'>
                    <FadeIn>
                        {props.children}
                    </FadeIn>
                </div>
            </div>
        </div>

    );
}
module.exports = Main;