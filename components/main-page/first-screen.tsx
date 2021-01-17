import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import background from 'public/images/first-screen-bg.jpg';

export default class FirstScreen extends Component {
    render() {
        return (
            <Section>
                <div className="container">
                    <h1>
                        Welcome<br />
                        home, dear<br />
                        traveler!
                    </h1>
                </div>


            </Section>
        )
    }
}

const Section = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    .container {
        height: 100%;
    }
    h1 {
        position: relative;
        top: 50%;
        left: 20px;
        margin: 0;
        font-style: italic; 
        transform: translate(0, -50%);
        display: inline-block;
        color: #E8D5C0;
        font-size: 80px;
        line-height: 1.08;
        text-shadow: 0px 2px 3px rgba(0,0,0,0.87);
        @media (max-width: 1999px) {
            font-size: 65px;
        }
    }
`