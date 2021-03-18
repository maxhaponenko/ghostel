import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import image from 'public/images/first-screen-bg.jpg'
import image1 from 'public/images/image_1.jpg';
import image2 from 'public/images/image_2.jpg';
import image3 from 'public/images/image_3.jpg';

export default class SecondScreen extends Component {
    render() {
        return (
            <Section>
                <div className="container">
                    <h3>ROOMS</h3>
                    <div className="rooms-container">
                        <div className="grid-item">
                            <div className="room-1"></div>
                        </div>
                        <div className="grid-item">
                            <div className="room-2"></div>
                        </div>
                        <div className="grid-item">
                            <div className="room-3"></div>
                        </div>
                        <div className="grid-item">
                            <div className="room-4"></div>
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}

const Section = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    .container {
        height: 100%;
        position: relative;
        padding-top: 100px;
        padding-bottom: 140px;
    }
    h3 {
        font-size: 35px;
        text-align: center;
        font-weight: normal;
        margin-bottom: 70px;
    }
    .rooms-container {
        display: flex;
        justify-content: space-between;
        margin-left: -10px;
        margin-right: -10px;
        
        > .grid-item {
            width: 25%;
            padding: 10px;
            height: 460px;
            
            > div {
                position: relative;
                height: 100%;
                width: 100%;
                
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-clip: content-box;
                border-radius: 15px;
                box-shadow: 0px 2px 2px rgba(0,0,0,0.5);
                cursor: pointer;
                transition: all 100ms ease-in-out;
                
                &:hover {
                    transform: translate(0, -5px);
                    
                }
            }
            > .room-1 { background-image: url(${image}); }
            > .room-2 { background-image: url(${image1}); }
            > .room-3 { background-image: url(${image2}); }
            > .room-4 { background-image: url(${image3}); }
        }
    }
    
    .booking-module-container {
        width: 887px;
        position: absolute;
        bottom: 100px;
        right: 10px;
        padding-right: 20px;
    }
`