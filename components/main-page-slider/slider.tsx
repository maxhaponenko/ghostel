import Slider from "react-slick";
import './slider.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookingCompact from 'components/booking-modules/compact/booking-compact';

export default function DefaultSlider() {

    const settings = {
        dots: true,
        dotsClass: 'main-slider__dots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="main-slider">
            <Slider {...settings} >
                <div className="main-slider__first-slide">
                    <p>
                        <span>Welcome</span>
                        <span>home, dear</span>
                        <span>travaler!</span>
                    </p>
                </div>
                <div className="main-slider__second-slide">

                </div>
                <div className="main-slider__third-slide">

                </div>
            </Slider>
            <BookingCompact />
        </div>
    )
}

const NextArrow = ({ className = "", style = {}, onClick = () => { } }) => (
    <div className="main-slider__arrow-container next" onClick={onClick}>
        <FontAwesomeIcon
            className={className}
            style={style}
            icon={faAngleRight}
        />
    </div>
)

const PrevArrow = ({ className = "", style = {}, onClick = () => { } }) => (
    <div className="main-slider__arrow-container prev" onClick={onClick}>
        <FontAwesomeIcon
            className={className}
            style={style}
            icon={faAngleLeft}
        />
    </div>
)