import styled from 'styled-components'
import background from 'public/images/bg-1.jpg'
import logo from 'public/images/logo.png'
import facebook from 'public/images/social-facebook.png'
import instagram from 'public/images/social-instagram.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <Section>
            <div className="container content-block">
                <img className="logo" src={logo}></img>
                <div className="content">
                    <ul className="menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About us</Link></li>
                        <li><Link href="/">Rooms</Link></li>
                        <li><Link href="/">Contacts</Link></li>
                        <li><Link href="/">Rules</Link></li>
                        <li><Link href="/">Check availability</Link></li>
                    </ul>
                    <div className="contacts">
                        <a href="tel:+380985520299">+38098 55 202 99</a>
                        <a href="mailto:ghostelh@gmail.com">ghostelh@gmail.com</a>
                        <p>Lviv, Kopernika str. 9/10-B <span>[v]</span></p>
                        <div className="social">
                            <div className="item" onClick={() => window.open('https://www.facebook.com/ghostellviv', '_blank')}><img src={facebook}></img></div>
                            <div className="item" onClick={() => window.open('https://www.instagram.com/ghostel.lviv/', '_blank')}><img src={instagram}></img></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="links">
                <a href="">Terms and Conditions</a>
                <span>|</span>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <span>|</span>
                <a href="">Sitemap</a>
                <span>|</span>
                <p>© {new Date().getFullYear()} GHOSTeL</p>
            </div>
        </Section>
    )
}

const Section = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${background});
    background-size: 30%;
    background-repeat: repeat;
    .content-block {
        padding: 70px 20px;
        display: flex;
        align-items: center;
        @media (max-width: 1400px) {
            padding: 70px 40px;
        }
        @media (max-width: 580px) {
            padding: 30px;
        }
        .logo {
            width: 125px;
            height: auto;
            margin-right: 70px;
            @media (max-width: 740px) {
                display: none;
            }
        }
        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;
            @media (max-width: 580px) {
                flex-direction: column;
            }
            .menu {
                a {
                    text-decoration: none;
                    color: #535353;
                    font-size: 18px;
                    line-height: 1.6;
                    transition: all 100ms ease-in-out;
                    &:hover {
                        color: #3d3d3d;
                    }
                }
                @media (max-width: 580px) {
                    margin-bottom: 30px;
                    li {
                        text-align: center;
                    }
                }
            }
            .contacts {
                a {
                    display: block;
                    text-decoration: none;
                    &:hover {
                        color: #3d3d3d;
                    }
                }
                a, p {
                    margin-bottom: 10px;
                    text-align: right;
                    color: #535353;
                    font-size: 18px;
                    @media (max-width: 580px) {
                        text-align: center;
                    }
                }
                .social {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 20px;
                    right: -8px;
                    position: relative;
                    @media (max-width: 580px) {
                        justify-content: center;
                    }
                    img {
                        height: 60px;
                        width: auto;
                    }
                    .item {
                        cursor: pointer;
                        transition: all 100ms ease-in-out;
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                    .item + .item {
                        margin-left: 20px;
                    }
                }
            }
        }
    }

    .links {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #828282;
        border-top: 1px solid rgba(218, 218, 218, 0.6);
        padding: 25px 10px;
        
        a, p {
            color: #828282;
            text-decoration: none;
            transition: all 100ms ease-in-out;
            font-size: 13px;
        }
        p, span {
            cursor: default;
        }
        a:hover {
            color: #6e6e6e;
        }
        span {
            margin: 0 9px;
            position: relative;
            top: -1px;
        }

        @media (max-width: 550px) {
            a, p {
                width: min-content;
                display: block;
                text-align: center;
            }
        }

        @media (max-width: 400px) {
            flex-direction: column;
            a, p {
                margin-bottom: 10px;
                width: auto;
            }
            span {
                display: none;
            }
        }
    }
`