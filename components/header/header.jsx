import React from 'react';
import './header.scss';

export default class Header extends React.PureComponent {


    render() {


        return (
            <nav className="main-nav">
                <ul className="menu">
                    
                    <li className="menu__item">Home</li>
                    <li className="menu__item">Our story</li>
                    <li className="menu__item logo">
                        <img src="/images/logo.png"></img>
                    </li>
                    <li className="menu__item">Bookings</li>
                    <li className="menu__item">Contact</li>
                </ul>
            </nav>
        )
    }
}