import './language-toggler.scss';
import React from 'react';

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

    selectEnglish = () => setTimeout(() => this.setState({ selectedLanguage: Language.eng }), 100)
    selectUkrainian = () => setTimeout(() => this.setState({ selectedLanguage: Language.ukr }), 100)
    selectRussian = () => setTimeout(() => this.setState({ selectedLanguage: Language.rus }), 100)

    renderLanguages(selectedLanguage) {
        if (selectedLanguage === Language.eng) {
            return <>
                <span className="ukr" onClick={this.selectUkrainian}>UKR</span>
                <span className="rus" onClick={this.selectRussian}>RUS</span>
                <span className="eng active">ENG</span>
            </>
        } else if (selectedLanguage === Language.ukr) {
            return <>
                <span className="eng" onClick={this.selectEnglish}>ENG</span>
                <span className="rus" onClick={this.selectRussian}>RUS</span>
                <span className="ukr active">UKR</span>
            </>
        } else if (selectedLanguage === Language.rus) {
            return <>
                <span className="eng" onClick={this.selectEnglish}>ENG</span>
                <span className="ukr" onClick={this.selectUkrainian}>UKR</span>
                <span className="rus active">RUS</span>
            </>
        }
    }

    render() {
        return <div 
            onMouseEnter={() => this.setState({ isOpen: true })}
            onMouseLeave={() => this.setState({ isOpen: false })}
            onClick={() => this.setState({ isOpen: !this.state.isOpen })} 
            className={`language-selector ${this.state.isOpen ? 'is-open' : ''}`}
        >
            <div className="language-selector__caret">
                {this.renderLanguages(this.state.selectedLanguage)}
            </div>
        </div>
    }
}