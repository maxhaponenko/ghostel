import React, { useState, useEffect } from 'react'
import { useSprings, animated, config } from 'react-spring'
import styled from 'styled-components'
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

    const handleClick = (index, event) => {
        event.preventDefault();

        const centerImageIndex = Object.values(items).indexOf(true)

        const isCenterItem = items[index] === true
        if (isCenterItem) {
            setFullScreenMode(true)
        } else {
            let newPosition = {
                0: false,
                1: false,
                2: false,
                3: false
            }
            newPosition[index] = true
            setItems(newPosition)

            // Update indexes to lie one on top of another
            document.querySelectorAll(`.animated-${centerImageIndex}`).forEach((item) => {
                (item as any).style['z-index'] = maxZindex() + 1
            })
        }
    }

    const centerIndex = Object.values(items).indexOf(true)

    const renderAnimatedImages = () => (
        <>
            {springs.map((item, index) => (
                <animated.div
                    key={index}
                    className={`image animated ${'animated-' + index} ${centerIndex === index ? 'center-image' : ''}`}
                    style={{ ...item, backgroundImage: `url(${images[index]})`, zIndex: 1 }}
                    onClick={(event) => {
                        event.stopPropagation()
                        handleClick(index, event)
                    }}
                >
                </animated.div>
            ))}
        </>
    )

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
    .image {
        position: absolute;
        height: 432px;
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
                height: 800px;
                width: 500px;
                max-height: 80%;
                max-width: 50%;
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