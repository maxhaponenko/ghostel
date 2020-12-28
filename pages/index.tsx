import React from 'react';
import Header from 'components/header/header';
import Slider from 'components/main-page-slider/slider';

export default class Home extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Slider />
        <div className="mp-our-story">      

        </div>
      </>

    );
  }
}
