import React, { RefObject, MouseEvent, Component, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import BgPattern from 'public/images/bg-1.jpg'
import Link from 'next/link'
import LogoPng from 'public/images/logo.png';
import DiscountBadge from 'components/cashback/cashback.entry';
import LanguageToggler from 'components/language-toggler';
import { animated, useSpring, config } from 'react-spring'


class OwnProps {
    transparentMode?: boolean;
}
class State {
    isOpen: boolean;
    isTransparent: boolean;
}

export default class Header extends React.PureComponent<OwnProps, State> {

    state = {
        isOpen: false,
        isTransparent: this.props.transparentMode,
    }

    mobileMenu: RefObject<any> = React.createRef();

    componentDidMount() {
        this.scrollPositionHandler()
        document.addEventListener('scroll', this.scrollPositionHandlerBinded)
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollPositionHandlerBinded)
    }
    scrollPositionHandler = () => {
        if (window.scrollY > 20 && this.props.transparentMode) {
            this.setState({ isTransparent: false })
        } else if (window.scrollY <= 20 && this.props.transparentMode) {
            this.setState({ isTransparent: true })
        }
    }
    scrollPositionHandlerBinded = this.scrollPositionHandler.bind(this)

    toggle = (e: MouseEvent) => {
        e.stopPropagation()
        if (this.state.isOpen) {
            this.setState({ isOpen: false }, () => {
                window.removeEventListener('click', this.handleOutsideClickBinded)
            })
        } else {
            this.setState({ isOpen: true }, () => {
                window.addEventListener('click', this.handleOutsideClickBinded)
            })
        }
    }
    handleOutsideClick = (e: MouseEvent) => {
        if (this.mobileMenu.current && !this.mobileMenu.current.contains(e.target)) {
            this.setState({ isOpen: false }, () => {
                window.removeEventListener('click', this.handleOutsideClickBinded)
            })
        }
    }
    handleOutsideClickBinded = this.handleOutsideClick.bind(this)

    render() {
        return (
            <Panel transparent={this.state.isTransparent} >
                <div className="container">
                    <div className="logo"><img src={LogoPng} /></div>
                    <AnimatedMenu isOpen={this.state.isOpen}>
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
                                <DiscountBadge smallShadow={this.state.isTransparent ? false : true} />
                            </div>
                            <div className="language">
                                <LanguageToggler />
                            </div>
                        </div>
                    </AnimatedMenu>
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
        height: 115px; 
        width: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 900px) {
            height: 90px; 
        }
        @media (max-width: 450px) {
            height: 90px;
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
            @media (max-width: 900px) {
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
            top: 22px;
            margin-left: auto;
            display: flex;
            background-image: url(${BgPattern});
            border-radius: 100%;
            width: 45px;
            max-width: 45px;
            min-width: 45px;
            height: 45px;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
            cursor: pointer;
            transition: transform 100ms ease-in-out;
            > * {
                font-size: 19px;
                color: #666666;
            }
            &:hover {
                transform: scale(1.05);
            }
            ${props => !props.transparent && css`
                background-color: transparent;
                box-shadow: none;
            `}
        }
        @media (max-width: 450px) {
            top: 20px;
            right: 20px;
        }
    }
    .menu-container {
        display: flex;
        flex-grow: 1;
        @media (max-width: 900px) {
            position: fixed;
            display: grid;
            padding: 30px 20px 20px;
            border-radius: 20px;
            top: 50%;
            background-image: url(${BgPattern});
            border: 1px solid rgba(255,255,255,0.3);
            left: 50%;
            transform: translate(-50%, -50%);
            gap: 0px;
            grid-template-areas:  
            "nav" 
            "discount"
            "languages";
            grid-template-rows: auto auto;
            grud-temaplte-columns: 1fr 1fr;
            box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 0px 250px rgba(0,0,0,0.5);
            .menu {
                grid-area: nav;
                ul {

                    flex-direction: column;
                    margin: 0 auto;
                    li {
                        text-align: center;
                        margin: 20px 0;
                        &:last-child {
                            margin-bottom: 0;
                        }
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
            .discount {
                display: none;
            }
            .language {
                grid-area: languages;
                margin: 0 auto;
                > div {
                    height: 125px !important;
                }
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

    ${props => !props.transparent && css`
        background: none;
        background-color: white;
        height: auto;
        box-shadow: 0 2px 5px rgba(0,0,0,0.27);
        background-image: url(${BgPattern});
        background-repeat: repeat;
        background-size: 30%;
        .logo {
            height: 90px;
            img {
                height: 60px;
            }
        }
        
        .menu-container {
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
            .discount {
                display: flex;
                justify-content: center;
                align-items: center;
                @media (max-width: 900px) {
                    display: none;
                }
                img {
                    position: relative;
                }
                > div > div {
                    height: 90px;
                }
            }
            .language {
                > div {
                    height: 90px;
                }
                .second-language, .third-language {
                    box-shadow: 0 0px 3px rgb(0 0 0 / 7w0%);
                }
            }
        }
    `}

`



const AnimatedMenu = ({ isOpen, children }) => {
    const [isMobileMode, setIsMobileMode] = useState(false)
    
    const handleResize = useCallback(
        () => {
            const windowWidth = window.innerWidth
            if (windowWidth <= 900 && !isMobileMode) {
                setIsMobileMode(true)
            } else if (windowWidth > 900 && isMobileMode) {
                setIsMobileMode(false)
            }
        },
        [isMobileMode]
    )
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    const spring = useSpring({
        from: { transform: isOpen ? 'translate(0%, 0%)' : 'translate(100%, 0%)' },
        to: { transform: isOpen ? 'translate(0%, 0%)' : 'translate(100%, 0$)' },
        config: config.stiff,
    })

    return (
        <Animated style={isMobileMode ? spring : {}} isMobileMode={isMobileMode} isOpen={isOpen}>
            {children}
        </Animated>
    )
}
const Animated = styled(animated.div)`
    display: flex;
    flex-grow: 1;
    will-change: transform;

    ${props => {
        console.log(props)
        if (props.isMobileMode) {
            return css`
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                transform: translate(0%, 0%);
            `
        } else {
            return css`
                position: relative;
                top: unset;
                left: unset;
                width: unset;
                height: unset;
                transform: translate(0%, 0%);
            `
        }
    }}

`