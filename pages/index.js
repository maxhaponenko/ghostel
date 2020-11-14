import React from 'react';
import Header from 'components/header/header'
import Slider from 'components/slider/slider'
import Image1 from 'public/images/background2.jpg'
import Image2 from 'public/images/background4.jpg'
import Image3 from 'public/images/background3.jpg'

export default class Home extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Slider>
          <section className="lp-section__first">
            {/* <h2>Slide 1</h2> */}
          </section>
          <section className="lp-section__second">
            {/* <h2>Slide 2</h2> */}
          </section>
          <section className="lp-section__third">
            {/* <h2>Slide 3</h2> */}
          </section>
        </Slider>
        <div style={{height: 200}}>
          Some content
          <img src={Image1} />
        </div>

      </>

    );
  }
}
