import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import LogoPng from 'public/images/logo.png';
import DiscountBadge from 'components/discount-badge';
import LanguageToggler from 'components/language-toggler';

class State {
    showMenu: boolean;
}

export default class Header extends React.PureComponent<any, State> {

    render() {
        return (
            <Panel>
                <div className="container">
                    <div className="logo"><img src={LogoPng} /></div>
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
            </Panel>
        )
    }
}

const Panel = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 142px;
    background: linear-gradient(rgba(0,0,0,0.7), transparent);
    .container {
        display: flex;
        align-items: center;
    }
    .logo {
        padding: 19px 0;
        img {
            height: 95px; 
            width: auto;
            cursor: pointer;
            transition: all 150ms ease-in-out; 
            &:hover {
                transform: scale(1.02);
            }
        }
    }
    .menu {
        display: flex;
        align-items: center;
        margin: 0 50px;
        ul {
            display: inline-flex;
            li {
                margin: 0 30px;
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

`
