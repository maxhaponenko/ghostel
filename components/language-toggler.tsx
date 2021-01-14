import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import eng from 'public/images/icons/flag-eng.png';
import ua from 'public/images/icons/flag-ua.png';
import ru from 'public/images/icons/flag-ru.png';

enum Language {
    ENG = 1,
    UA = 2,
    RU = 3,
}


export class LanguageToggler extends Component {

    state = {
        selectedLanguage: Language.ENG,
        secondLanguage: Language.UA,
        thirdLanguage: Language.RU
    }

    getLanguageClass = (language: Language) => {
        if (language === Language.ENG) return 'eng'
        if (language === Language.UA) return 'ua'
        if (language === Language.RU) return 'ru'
    }

    render() {
        return (
            <Toggler>
                <div className={`selected-language ${this.getLanguageClass(this.state.selectedLanguage)}`}></div>
                <div className={`second-language ${this.getLanguageClass(this.state.secondLanguage)}`}></div>
                <div className={`third-language ${this.getLanguageClass(this.state.thirdLanguage)}`}></div>
            </Toggler>
        )
    }
}

const Toggler = styled.div`
    position: relative;
    height: 105px;
    width: 105px; 
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        .second-language {
            transform: translate(-179%, -10%);
            &:hover {
                transform: translate(-179%, -10%) scale(1.03);
            }
        }
        .third-language {
            transform: translate(-88%, 89%);
            &:hover {
                transform: translate(-88%, 89%) scale(1.03);
            }
        }
    }
    .selected-language {
        width: 45px;
        height: 45px;
        border-radius: 100%;
        border: 2px solid white;
        background-size: cover;
        box-shadow: 0 1px 1px rgba(0,0,0,0.5);
        z-index: 1;
    }
    .second-language {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 39px;
        height: 39px;
        border-radius: 100%;
        border: 2px solid white;
        background-size: cover;
        box-shadow: 0 1px 1px rgba(0,0,0,0.5);
        transition: all 50ms ease-in-out;
        cursor: pointer;
        
    }
    .third-language {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36px;
        height: 36px;
        border-radius: 100%;
        border: 2px solid white;
        background-size: cover;
        box-shadow: 0 1px 1px rgba(0,0,0,0.5);
        transition: all 50ms ease-in-out;
        cursor: pointer;
    }
    .eng {
        background-image: url(${eng});
    }
    .ua {
        background-image: url(${ua});
    }
    .ru {
        background-image: url(${ru});
    }
`

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggler)
