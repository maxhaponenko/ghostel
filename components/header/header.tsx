import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import LanguageToggler from './language-toggler/language-toggler'
import './header.scss';

class State {
    showMenu: boolean;
}

export default class Header extends React.PureComponent<any, State> {

    state = {
        showMenu: false,
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }


    render() {
        return (
            <nav className="main-nav">
                <div className="container">

                    <ul className={`menu ${this.state.showMenu ? 'show' : ''}`}>
                        <li className="menu__item logo">
                            <img src="/images/logo.png"></img>
                        </li>
                        <li className="menu__item">About us</li>
                        <li className="menu__item">Rooms</li>
                        <li className="menu__item">Contact</li>
                        <LanguageToggler />
                    </ul>
                    <button onClick={this.toggleMenu}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>

                </div>
            </nav>
        )
    }
}