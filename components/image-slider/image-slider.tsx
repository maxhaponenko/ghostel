import React, { useState, useEffect } from 'react'
import { useSprings, animated, config } from 'react-spring'
import styled from 'styled-components'
import image from 'public/images/image_5.jpg'
import image1 from 'public/images/image_7.jpg';
import image2 from 'public/images/image_4.jpg';
import image3 from 'public/images/image_6.jpg';

const images = [image, image1, image2, image3]

const getAnimation = (items) => (index) => {
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
        delay: index * 50,

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

    const [springs, set] = useSprings(Object.values(items).length, getAnimation(items))

    useEffect(() => {
        set(getAnimation(items) as any)
    }, [items])

    const handleClick = (index, event) => {

        const centerImageIndex = Object.values(items).indexOf(true)

        const isCenterItem = items[index] === true
        if (isCenterItem) {
            return
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
            debugger
            if (centerImageIndex >= index) {
                let nextImage = document.getElementById('animated-'+ (index + 1))
                nextImage.style.zIndex = (parseInt(nextImage.style.zIndex) + 1).toString()
            } else {
                let prevImage = document.getElementById('animated-'+ (index - 1))
                prevImage.style.zIndex = (parseInt(prevImage.style.zIndex) - 1).toString()
            }
        }
    }

    return (
        <Section>
            {springs.map((item, index) => (
                <animated.div key={index} id={'animated-' + index} className="image" style={{ ...item, backgroundImage: `url(${images[index]})`, zIndex: 1 }} onClick={(event) => handleClick(index, event) }></animated.div>
            ))}
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

        background-size: cover;
        background-position: center;
        z-index: 1;
    }
`