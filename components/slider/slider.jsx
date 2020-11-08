import Slider from "react-slick";
import './slider.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DefaultSlider({ children }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

    return (
        <Slider className="main-slider" {...settings} >
            {children}
        </Slider>
    )
}

const NextArrow = ({ className, style, onClick }) => (
    <div className="main-slider__arrow-container next" onClick={onClick}>
        <FontAwesomeIcon 
            className={className} 
            style={style}
            icon={faAngleRight} 
            
        />
    </div>
)

const PrevArrow = ({ className, style, onClick }) => (
    <div className="main-slider__arrow-container prev" onClick={onClick}>
        <FontAwesomeIcon
            className={className}
            style={style}
            icon={faAngleLeft}
        />
    </div>
)