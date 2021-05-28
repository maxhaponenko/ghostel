import React, { useState, useEffect } from 'react'
import { useSprings, animated, config } from 'react-spring'
import styled from 'styled-components'
import Slider from 'react-slick'
import image from 'public/images/image_5.jpg'
import image1 from 'public/images/image_7.jpg';
import image2 from 'public/images/image_4.jpg';
import image3 from 'public/images/image_6.jpg';

const images = [image, image1, image2, image3]

const getAnimation = (items, initial = false) => (index) => {
    const isCenter = items[index] === true
    const isLeft = (() => {
        if (items[index] === true) return false
        const indexOfCenterImage = Object.values(items).indexOf(true)
        if (indexOfCenterImage > index) return true
        return false
    })()

    const centerPosition = '0%; 0%'
    const leftPosition = '-80%; 0%'
    const rightPosoition = '80%; 0%'

    return {
        from: {
            transform: 'translate(0%, 0%) scale(1)',
        },
        to: {
            transform: isCenter ? `translate(${centerPosition}) scale(1)` : isLeft ? `translate(${leftPosition}) scale(0.25)` : `translate(${rightPosoition}) scale(0.25)`,
        },
        delay: index * 0,
        immediate: initial,
        config: config.default,
    }
}

export default function ImageSlider() {

    let [items, setItems] = useState({  // photo visibility state
        0: false,
        1: true,
        2: false,
        3: false
    })
    let [fullScreenMode, setFullScreenMode] = useState(false)

    const [springs, set] = useSprings(Object.values(items).length, getAnimation(items, true))

    useEffect(() => {
        set(getAnimation(items) as any)

    }, [items])

    useEffect(() => {
        // make closest images be at the top
        const centerImageIndex = Object.values(items).indexOf(true)
        const leftImageIndex = centerImageIndex - 1
        const rightImageIndex = centerImageIndex + 1

        document.querySelectorAll(`.animated-${leftImageIndex}`).forEach((item) => {
            (item as any).style['z-index'] = 2
        })
        document.querySelectorAll(`.animated-${rightImageIndex}`).forEach((item) => {
            (item as any).style['z-index'] = 2
        })

    }, [])

    const changeSlide = (position: number) => {
        const centerImageIndex = Object.values(items).indexOf(true)
        let newPosition = {
            0: false,
            1: false,
            2: false,
            3: false
        }
        newPosition[position] = true
        setItems(newPosition)

        // Update indexes to lie one on top of another
        document.querySelectorAll(`.animated-${centerImageIndex}`).forEach((item) => {
            (item as any).style['z-index'] = maxZindex() + 1
        })
    }

    const handleClick = (index, event) => {
        event.preventDefault();

        const centerImageIndex = Object.values(items).indexOf(true)

        const isCenterItem = items[index] === true
        if (isCenterItem) {
            setFullScreenMode(true)
        } else {
            // Prevent from clicking on last image if next available image exists 
            if (centerImageIndex < index && (index - centerImageIndex) > 1 && index !== centerImageIndex + 1) {
                changeSlide(centerImageIndex + 1)
                return
            }
            if (centerImageIndex > index && (centerImageIndex - index) > 1 && index !== centerImageIndex - 1) {
                changeSlide(centerImageIndex - 1)
                return
            } else {
                changeSlide(index)
            }
        }
    }

    const centerIndex = Object.values(items).indexOf(true)

    const renderAnimatedImages = () => (
        <div className="image-container">
            {springs.map((item, index) => (
                <animated.img
                    key={index}
                    className={`image animated ${'animated-' + index} ${centerIndex === index ? 'center-image' : ''}`}
                    style={{ ...item, zIndex: 1 }}
                    src={images[index]}
                    onClick={(event) => {
                        event.stopPropagation()
                        handleClick(index, event)
                    }}
                >
                </animated.img>
            ))}
        </div>
    )

    const mobileViewSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false
    }

    return (
        <Section fullScreen={fullScreenMode}>

            {renderAnimatedImages()}
            <div className="full-screen-mode" onClick={(event) => {
                setFullScreenMode(false)
            }}>
                <div className="wrapper">
                    {renderAnimatedImages()}
                </div>
            </div>
            <div className="mobile-view">
                <Slider {...mobileViewSliderOptions} >
                    {images.map((item, index) => (
                        <div className="slider-image-container" >
                            <div className={`slider-image`} style={{ backgroundImage: `url(${images[index]})` }} ></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    )
}


const Section = styled.div`
    position: relative;
    top: 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 490px;
    
    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 700px) {
            display: none;
        }
    }
    .image {
        position: absolute;
        height: auto;
        width: 287px;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        /* border: 1px solid rgba(255,255,255,0.2); */
        filter: grayscale(1);
        background-size: cover;
        background-position: center;
        z-index: 1;
        cursor: pointer;
        transition: filter 350ms ease-in-out;
        &:hover {
            filter: grayscale(0);
        }
        &.center-image {
            filter: grayscale(0);
        }

        

    }
    .full-screen-mode {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.9);
        top: 0;
        left: 0;
        z-index: 100;
        display: ${props => props.fullScreen ? 'block' : 'none'};
        .wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .image {
                height: auto;
                width: 500px;
                max-height: 80%;
                max-width: 50%;
            }
        }
    }

    .mobile-view {
        display: none;
        position: relative;
        width: 100%;
        height: auto;
        @media (max-width: 700px) {
            display: block;
        }
        .slick-track {
            display: flex;
            .slick-slide {
                display: flex;
                height: auto;
                align-items: center;
                justify-content: center;
                width: 100%;
                > div {
                    width: 100%;
                }
                img {
                    margin: 0 auto;
                    max-height: 400px;
                    border-radius: 5px;
                }
            }
        }
        
        .slick-list {
            margin: 0 -40px;
        }
        .slider-image-container {
            padding: 0 20px;

            .slider-image {
                width: 100% !important;
                height: 400px !important;
                height: auto;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;

                margin: 0 auto;
                max-height: 400px;
                border-radius: 10px;

                cursor: grab;
                box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
            }
        }
        
    }
`

function maxZindex() {
    var elems = document.querySelectorAll('.image.animated');
    var highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
    for (var i = 0; i < elems.length; i++) {
        var zindex = Number.parseInt(
            document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
            10
        );
        if (zindex > highest) {
            highest = zindex;
        }
    }
    return highest;
}