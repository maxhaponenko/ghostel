import React from 'react';
import Header from 'components/header/header'
import Slider from 'components/main-page-slider/slider'
import Image1 from 'public/images/background3.jpg'

export default class Home extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Slider />
        <div style={{height: 200}}>
          Some content
          <img src={Image1} />
        </div>

      </>

    );
  }
}
