import './language-toggler.scss';
import React, { useState } from 'react';

const UKR = 'ukr'
const ENG = 'eng'

export default function LanguageToggler() {

    const [position, setPosition] = useState(ENG)

    const toggle = () => {
        const newPosition = position === ENG ? UKR : ENG
        setPosition(newPosition)
    }

    return (
        <div className="language-toggler" onClick={toggle}>
            <div className={`language-toggler__caret ${position === UKR ? 'ukr' : 'eng'}`}>
                <span className="language-toggler__text" style={{paddingLeft: 3}}>eng</span>
                <span className="language-toggler__toggler"></span>
                <span className="language-toggler__text" style={{paddingRight: 3}}>ukr</span>
            </div>
        </div>
    )
}