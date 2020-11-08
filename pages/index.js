import Header from 'components/header/header'
import Slider from 'components/slider/slider'

export default function Home() {
  return (
      <>
        <Header />
        <Slider>
        <section className="lp-section__first">
          <h2>Slide 1</h2>
        </section>
        <section className="lp-section__first">
          <h2>Slide 2</h2>
        </section>
        </Slider>
        
      </>
      
  );
}
