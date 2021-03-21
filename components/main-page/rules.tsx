import React, { Component } from 'react'
import styled from 'styled-components'
import background from 'public/images/image_rules.jpg'
import bgPaper from 'public/images/bg-2.jpg'
import Button from 'components/forms/button'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default class Rules extends Component {
    render() {
        return (
            <Section>
                <div className="accomodation-time">
                    <div className="checkin">
                        <span className="time">14:00</span>
                        <span className="text">checkin</span>
                    </div>
                    <div className="checkout">
                        <span className="text">checkout</span>
                        <span className="time">12:00</span>
                    </div>
                </div>
                <Button type="default" size="lg" shadow color="white"><FAIcon icon={faConciergeBell} />Accomodation Rools</Button>
                <Button type="default" size="lg" shadow color="white"><FAIcon icon={faCreditCard} />Payment rools</Button>
            </Section>
        )
    }
}

const Section = styled.div`
    height: 371px;
    background-image: url(${background});
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    

    .accomodation-time {
        width: 353px;
        height: 126px;
        display: flex;
        background-color: white;
        border-radius: 15px;
        margin-bottom: 25px;

        background-image: url(${bgPaper});
        background-size: 11%;
        background-repeat: repeat;
        box-shadow: 0px 2px 2px rgb(0 0 0 / 50%);

        @media (max-width: 600px) {
            width: 280px;
            height: 100px;
        }

        .checkin {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            flex-grow: 1;
            border-right: 1px solid #C8C8C8;
            .time {
                font-size: 45px;
                font-weight: 500;
                position: relative;
                left: -3px;
                @media (max-width: 600px) {
                    font-size: 32px;
                }
            }
            .text {
                position: absolute;
                transform: rotate(-90deg);
                right: -18px;
                opacity: 0.5;
                @media (max-width: 600px) {
                    font-size: 14px;
                    right: -13px;
                }
            }
        }
        .checkout {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            flex-grow: 1;
            .time {
                font-size: 45px;
                font-weight: 500;
                position: relative;
                right: -3px;
                @media (max-width: 600px) {
                    font-size: 32px;
                }
            }
            .text {
                position: absolute;
                transform: rotate(-90deg);
                left: -22px;
                opacity: 0.5;
                @media (max-width: 600px) {
                    font-size: 14px;
                    left: -20px;
                }
            }
        }
    }

    button {
        width: 287px;
        padding: 9px; 
        color: rgba(0,0,0,0.7);
        font-weight: 500;
        @media (max-width: 600px) {
            width: 260px;
            padding: 7px; 
        }
        svg {
            margin-right: 10px;
            fill: rgba(0,0,0,0.7);
        }
    }

    button + button {
        margin-top: 10px;
    }

`