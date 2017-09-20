import React from 'react';

var Portfolio = () => {
    return (
        <div>
            <h1 className='text-center page-title'>Portfolio</h1>
            <h4 className='text-center'>A collection of projects I have created or collaborated on</h4>
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
                        <p className='text-center'>jQuery</p>
                        <p className='text-center'>jQuery UI</p>
                    </a>
                </div>
            </div>
            {/* <div className="callout">
                <h4 className='text-center'>Map Fun</h4>
                <img src={'http://i.imgur.com/hB5aqPd.png'} />
                <p>A maps application that gives the user information about a city.</p>
                <h5>Technologies Used</h5>
                <ul>
                    <li>jQuery</li>
                    <li>AJAX</li>
                </ul>
                <a className='hollow button primary' href="https://maps-app-ut.herokuapp.com/" target="_blank">Click Here</a>
            </div>
            <div className="callout">
                <h4 className='text-center'>React Sports</h4>
                <img src={'http://i.imgur.com/ZLPMLf9.png'} />
                <p>An application that allows a user to search for local pickup games.</p>
                <h5>Technologies Used</h5>
                <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Auth0</li>
                </ul>
                <a className='hollow button primary' href="http://react-sports.herokuapp.com/" target="_blank">Click Here</a>
            </div> */}
        </div>
    );
}

export default Portfolio;