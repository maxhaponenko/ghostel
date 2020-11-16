import './language-toggler.scss';
import React, { useState, useRef } from 'react';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UKR = 'ukr'
const ENG = 'eng'

export default class LanguageToggler extends React.Component {

    state = {
        position: ENG
    }
    iconRef = React.createRef()

    toggle = () => {
        const newPosition = this.state.position === ENG ? UKR : ENG
        const rotateText = this.state.position === ENG ? 'rotate(180deg)' : 'rotate(-180deg)'
        this.iconRef.current.style.transform = rotateText;

        debugger

        this.setState({
            position: newPosition
        })
        
    }

    render() {
        return (
            <div className="language-toggler" onClick={this.toggle}>
                <div className={`language-toggler__caret ${this.state.position === UKR ? 'ukr' : 'eng'}`}>
                    <span className="language-toggler__text" style={{ paddingLeft: 3 }}>eng</span>
                    <span className="language-toggler__toggler" ref={this.iconRef}>
                        <FontAwesomeIcon  className="language-toggler__icon rotate" icon={faGlobeEurope} />
                    </span>
                    <span className="language-toggler__text" style={{ paddingRight: 3 }}>ukr</span>
                </div>
            </div>
        )
    }
}