import React from 'react';
import styled from 'styled-components'
import Header from 'components/header'
import FirstScreen from 'components/main-page/first-screen'
import SecondScreen from 'components/main-page/second-screen'
export default class Home extends React.Component {

  render() {

    return (
      <>
        <Header withBackground={false} />
        <FirstScreen />
        <SecondScreen />
      </>
    );
  }
}