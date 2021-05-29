import React from 'react';
import DefaultLayout from 'components/layouts/default-layout'
import FirstScreen from 'components/main-page/first-screen'
import SecondScreen from 'components/main-page/rooms'
import Rules from 'components/main-page/rules'
import OurStory from 'components/main-page/our-story'
import Map from 'components/main-page/map'
import SeoText from 'components/main-page/seo-text'

export default class Home extends React.Component {

  componentDidMount() {
    document.title = 'Ghostel'
  }

  render() {

    return (
      <DefaultLayout transparentHeader>
        <FirstScreen />
        <SecondScreen />
        <Rules />
        <OurStory />
        <Map />
        <SeoText />
      </DefaultLayout>
    );
  }
}