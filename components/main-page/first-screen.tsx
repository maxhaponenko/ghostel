import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import background from 'public/images/first-screen-bg.jpg';

export default class FirstScreen extends Component {
    render() {
        return (
            <Section>
                
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
`