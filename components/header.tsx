import React, { RefObject, MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import BgPattern from 'public/images/bg-1.jpg'
import Link from 'next/link'
import LogoPng from 'public/images/logo.png';
import DiscountBadge from 'components/cashback/cashback.entry';
import LanguageToggler from 'components/language-toggler';

class State {
    isOpen: boolean;
}
class OwnProps {
    withBackground?: boolean;
}

export default class Header extends React.PureComponent<OwnProps, State> {

    state = {
        isOpen: false,
    }

    mobileMenu: RefObject<any> = React.createRef();

    toggle = (e: MouseEvent) => {
        e.stopPropagation()
        if (this.state.isOpen) {
            this.setState({ isOpen: false }, () => {
                window.removeEventListener('click', this.handleOutsideClickBinded)
            })
        } else {
            this.setState({ isOpen: true}, () => {
                window.addEventListener('click', this.handleOutsideClickBinded)
            })
        }
    }
    handleOutsideClick = (e: MouseEvent) => {
        if (this.mobileMenu && !this.mobileMenu.current.contains(e.target)) {
            this.setState({ isOpen: false }, () => {
                window.removeEventListener('click', this.handleOutsideClickBinded)
            })
        }
    }
    handleOutsideClickBinded = this.handleOutsideClick.bind(this)


    render() {
        return (
            <Panel withBackground={this.props.withBackground} isOpen={this.state.isOpen}>
                <div className="container">
                    <div className="logo"><img src={LogoPng} /></div>
                    <div className="menu-container" ref={this.mobileMenu}>
                        <div className="menu">
                            <ul>
                                <li><Link href="/">RULES</Link></li>
                                <li><Link href="/">FACILITIES</Link></li>
                                <li><Link href="/">ROOMS</Link></li>
                                <li><Link href="/">CONTACTS</Link></li>
                            </ul>
                        </div>
                        <div className="discount">
                            <DiscountBadge />
                        </div>
                        <div className="language">
                            <LanguageToggler />
                        </div>
                    </div>
                    <div className="mobile-nav-btn" onClick={(e) => this.toggle(e)}>
                        <FAIcon icon={this.state.isOpen ? faTimes : faBars} />
                    </div>
                </div>
            </Panel>
        )
    }
}

const Panel = styled.div`
    position: fixed;
    z-index: 100;
    width: 100%;
    max-width: 100vw;
    height: 142px;
    background: linear-gradient(rgba(0,0,0,0.7), transparent);
    
    .container {
        display: flex;
        align-items: center;
    }
    .logo {
        /* padding: 19px 0; */
        height: 115px; 
        width: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 900px) {
            height: 105px; 
        }
        @media (max-width: 450px) {
            height: 95px;
            width: 110px;
        }
        img {
            height: 95px; 
            width: auto;
            cursor: pointer;
            transition: all 150ms ease-in-out; 
            @media (max-width: 1100px) {
                height: 75px; 
            }
            @media (max-width: 450px) {
                height: 60px;
            }
            &:hover {
                transform: scale(1.02);
            }
        }
    }
    
    .mobile-nav-btn {
        display: none;
        @media (max-width: 900px) {
            position: fixed;
            right: 40px;
            top: 35px;
            margin-left: auto;
            display: flex;
            background-color: white;
            border-radius: 100%;
            width: 45px;
            max-width: 45px;
            min-width: 45px;
            height: 45px;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
            cursor: pointer;
            > * {
                font-size: 21px;
            }
        }
        @media (max-width: 450px) {
            top: 25px;
            right: 20px;
        }
    }
    .menu-container {
        display: flex;
        flex-grow: 1;
        transition: all 200ms ease-in-out;
        @media (max-width: 900px) {
            position: fixed;
            display: grid;
            padding: 30px 20px 20px;
            /* backdrop-filter: blur(1px); */
            border-radius: 20px;
            top: 50%;
            background-color: rgba(0,0,0,0.7);
            border: 1px solid rgba(255,255,255,0.3);
            left: ${props => props.isOpen ? '50%' : '150%'};
            transform: translate(-50%, -50%);
            gap: 10px;
            grid-template-areas:  
            "nav" 
            "discount"
            "languages";
            grid-template-rows: auto auto;
            grud-temaplte-columns: 1fr 1fr;
            .menu {
                grid-area: nav;
                ul {

                    flex-direction: column;
                    margin: 0 auto;
                    li {
                        text-align: center;
                        margin: 20px 0;
                    }
                }
            }
            .discount {
                display: none;
            }
            .language {
                grid-area: languages;
                margin: 0 auto;
            }
        }
    }
    .menu {
        display: flex;
        align-items: center;
        margin: 0 50px;
        @media (max-width: 1100px) {
            margin: 0 30px;
        }
        ul {
            display: inline-flex;
            li {
                margin: 0 30px;
                @media (max-width: 1100px) {
                    margin: 0 20px;
                }
                a {
                    color: white;
                    text-decoration: none;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    text-shadow: 0 1px 1px rgba(0,0,0,0.89);
                    transition: all 100ms ease-in-out;
                    &:hover {
                        color: rgba(255,255,233,0.9);
                    }
                }
            }
        }
    }
    .discount {
        margin-left: auto;
    }
    .language {
        margin-left: 20px;
    }

    ${props => props.withBackground && css`
        background: none;
        background-color: white;
        height: auto;
        box-shadow: 0 2px 5px rgba(0,0,0,0.27);
        background-image: url(${BgPattern});
        background-repeat: repeat;
        background-size: 30%;
        .logo {
            img {
                height: 60px;
            }
        }
        .menu {
            ul {
                li {
                    a {
                        color: #666666;
                        text-shadow: none;
                        font-weight: 700;
                        &:hover {
                            color: #414141;
                        }
                    }
                }
            }
        }
    `}

`
