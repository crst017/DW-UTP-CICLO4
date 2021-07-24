// import Header from './components/Header';
// import Footer from './components/Footer';
import React from 'react';
import './Landing.css';
import adv1 from './img/addbanner.jpg';

export default function Landing() {
    return (
        <div className='landing'>
            <div className = 'banner'>
                <img src={adv1} className='img-fluid' alt="banner" />
            </div>
            <div className="cont-card">
                <a className='card card-home' href="/">
                    <h2>Característica 1</h2>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </a>

                <a className="card card-home" href="/">
                    <h2>Característica 2</h2>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </a>

                <a className="card card-home" href="/">
                    <h2>Característica 3</h2>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </a>

                <a className="card card-home" href="/">
                    <h2>Característica 4</h2>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </a>
            </div>
        </div>
    )
}