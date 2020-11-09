import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

export default class Header extends React.PureComponent {

    state = {
        showMenu: false,
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu})
    }


    render() {


        return (
            <nav className="main-nav">
                <ul className={`menu ${this.state.showMenu ? 'show' : ''}`}>
                    
                    <li className="menu__item">Home</li>
                    <li className="menu__item">Our story</li>
                    <li className="menu__item logo">
                        <img src="/images/logo.png"></img>
                    </li>
                    <li className="menu__item">Bookings</li>
                    <li className="menu__item">Contact</li>
                </ul>
                <button onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </nav>
        )
    }
}