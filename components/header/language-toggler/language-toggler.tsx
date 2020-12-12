import './language-toggler.scss';
import React, { useState, useRef } from 'react';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UKR = 'ukr'
const ENG = 'eng'
const RUS = 'rus'

enum Language {
    eng = 1,
    ukr = 2,
    rus = 3
}

export default class LanguageToggler extends React.Component {

    state = {
        isOpen: false,
        selectedLanguage: Language.eng
    }
    iconRef = React.createRef()

    selectEnglish = () => this.setState({ selectedLanguage: Language.eng })
    selectUkrainian = () => this.setState({ selectedLanguage: Language.ukr })
    selectRussian = () => this.setState({ selectedLanguage: Language.rus })

    renderLanguages(selectedLanguage) {
        if (selectedLanguage === Language.eng) {
            return <>
                <span className="ukr" onClick={this.selectUkrainian} >ukr</span>
                <span className="eng active">eng</span>
                <span className="rus" onClick={this.selectRussian}>rus</span>
            </>
        } else if (selectedLanguage === Language.ukr) {
            return <>
                <span className="eng" onClick={this.selectEnglish}>eng</span>
                <span className="ukr active">ukr</span>
                <span className="rus" onClick={this.selectRussian}>rus</span>
            </>
        } else if (selectedLanguage === Language.rus) {
            return <>
                <span className="eng" onClick={this.selectEnglish}>eng</span>
                <span className="rus active">rus</span>
                <span className="ukr" onClick={this.selectUkrainian}>ukr</span>
            </>
        }
    }

    render() {
        return <div onClick={() => this.setState({ isOpen: !this.state.isOpen })} className={`language-selector ${this.state.isOpen ? 'is-open' : ''}`}>
            <div className="language-selector__caret">
                {this.renderLanguages(this.state.selectedLanguage)}
            </div>
        </div>
    }
}