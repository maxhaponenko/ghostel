import './language-toggler.scss';
import React, { useState, useRef } from 'react';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UKR = 'ukr'
const ENG = 'eng'

export default class LanguageToggler extends React.Component {

    state = {
        isOpen: false
    }
    iconRef = React.createRef()

    toggle = () => {

        this.setState({
            position: newPosition
        })
    }

    componentDidMount() {

    }

    render() {
        return <div onClick={() => this.setState({ isOpen: !this.state.isOpen })} className={`language-selector ${this.state.isOpen ? 'is-open' : ''}`}>
            <div className="language-selector__caret">
                <span className="eng">eng</span>
                <span className="ukr">ukr</span>
                <span className="rus">rus</span>
            </div>
        </div>
    }
}