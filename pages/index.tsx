import React from 'react';
import styled from 'styled-components'
import Header from 'components/header'
import FirstScreen from 'components/main-page/first-screen'
import SecondScreen from 'components/main-page/rooms'
import Rules from 'components/main-page/rules'
import OurStory from 'components/main-page/our-story'
export default class Home extends React.Component {

  render() {

    return (
      <>
        <Header withBackground={false} />
        <FirstScreen />
        <SecondScreen />
        <Rules />
        <OurStory />
      </>
    );
  }
}