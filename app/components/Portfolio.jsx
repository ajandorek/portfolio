import React from 'react';

var Portfolio = () => {
    return (
        <div>
            <h1 className='text-center page-title'>Portfolio</h1>
            <h4 className='text-center'>A collection of projects I have created or collaborated on</h4>
            <div className="grid-x grid-margin-x">
                <div className="small-4 large-offset-2 cell">
                    <a className="callout" href="https://maps-app-ut.herokuapp.com/"
                        target="blank">
                        <h4 className='text-center'>Map Fun</h4>
                        <img src={'http://i.imgur.com/hB5aqPd.png'} />
                        <p className='text-center'>A maps application that gives the user information about a city.</p>
                        <h5 className='text-center'>Technologies Used</h5>
                        <p className='text-center'>jQuery & AJAX</p>
                    </a>
                </div>
                <div className="small-4 cell">
                    <a className="callout" href="http://react-sports.herokuapp.com/"
                        target="blank">
                        <h4 className='text-center'>React Sports</h4>
                        <img src={'http://i.imgur.com/ZLPMLf9.png'} />
                        <p className='text-center'>An application that allows a user to search for local pickup games.</p>
                        <h5 className='text-center'>Technologies Used</h5>
                        <p className='text-center'>React, Redux, MongoDB, Express, Auth0</p>
                    </a>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="small-4 large-offset-2 cell">
                    <a className="callout" href="https://fallout-hangman.herokuapp.com/"
                        target="blank">
                        <h4 className='text-center'>Fallout Hangman</h4>
                        <img src={'http://i.imgur.com/2oyhTTb.png'} />
                        <p className='text-center'>A simple hangman game with a Fallout theme!</p>
                        <h5 className='text-center'>Technologies Used</h5>
                        <p className='text-center'>Javascript</p>
                    </a>
                </div>
                <div className="small-4 cell">
                    <a className="callout" href="https://overwatch-rpg.herokuapp.com/"
                        target="blank">
                        <h4 className='text-center'>Overwatch RPG</h4>
                        <img src={'http://i.imgur.com/qbBRC4d.png'} />
                        <p className='text-center'>A role playing game with an Overwatch spin!</p>
                        <h5 className='text-center'>Technologies Used</h5>
                        <p className='text-center'>jQuery, jQueryUI</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;