import React, { useState, useEffect } from 'react'
import { useSprings, animated, config } from 'react-spring'
import styled from 'styled-components'
import image from 'public/images/image_5.jpg'
import image1 from 'public/images/image_7.jpg';
import image2 from 'public/images/image_4.jpg';
import image3 from 'public/images/image_6.jpg';
import Button from 'components/forms/button';

const images = [image, image1, image2, image3]

const getAnimation = (items) => (index) => {
    const isVisible = items[index] === true
    const rotationMap = {
        0: '-9deg',
        1: '-5deg',
        2: '-2deg',
        3: '2deg',
    }
    return {
        from: {
            transform: 'translate(-300%, 0%) rotate(-180deg)',
        },
        to: {
            transform: isVisible ? `translate(0%, 0%) rotate(${rotationMap[index]})` : 'translate(-300%, 0%) rotate(-180deg)',
        },
        delay: index * 50,
        config: config.default,
    }
}

export default function Photos() {

    let [photos, setItems] = useState({  // photo visibility state
        0: true,
        1: true,
        2: true,
        3: true
    })

    const [springs, set] = useSprings(Object.values(photos).length, getAnimation(photos))

    // animate when items visibility changes
    useEffect(() => {
        set(getAnimation(photos) as any)
    }, [photos])

    const hideFrontPhoto = () => {
        const lastVisiblePhoto = Object.values(photos).lastIndexOf(true)
        if (lastVisiblePhoto) {
            setItems({ ...photos, [lastVisiblePhoto]: false })
        }
    }
    const showHiddenPhoto = () => {
        const itemsMaxIndex = Object.values(photos).length - 1
        const lastVisiblePhoto = Object.values(photos).lastIndexOf(true)
        if (typeof lastVisiblePhoto === 'number' && itemsMaxIndex !== lastVisiblePhoto) {
            setItems({ ...photos, [lastVisiblePhoto + 1]: true })
        }
    }

    return (
        <Section >
            <div className="container">

                <h3>OUR STORY</h3>
                <div className="our-story-container">

                    <div className="grid-photos">
                        <div className="photos-container">
                            {springs.map((item, index) => (
                                <animated.div className="photo" style={{ ...item, backgroundImage: `url(${images[index]})` }}></animated.div>
                            ))}
                        </div>
                    </div>


                    <div className="grid-texts">
                        <div className="texts-container">
                            <div className="chapter">Pt 1</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="navigation">
                                <Button onClick={() => showHiddenPhoto()} size="md" type="outline" color="primary" >Previous</Button>
                                <Button onClick={() => hideFrontPhoto()} size="md" type="outline" color="primary" >Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const PhotoContainer = styled.div`
    position: relative;
    min-height: 500px;
    margin-bottom: 50px;
    padding: 10px 50px;
    
    .buttons {
        position: relative;
        > button { 
            margin-left: auto;
        }
    }
`


const Section = styled.div`
    position: relative;
    width: 100%;
    .container {
        height: 100%;
        position: relative;
        padding-top: 100px;
        padding-bottom: 140px;
    }
    h3 {
        font-size: 35px;
        text-align: center;
        font-weight: normal;
        margin-bottom: 70px;
    }
    .our-story-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .grid-photos {
            width: 40%;
            position: relative;
            display: flex;
            justify-content: center;
            .photos-container {
                height: 500px;
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .photo {
                position: absolute;
                height: 501px;
                width: 341px;
                border-radius: 15px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.5);

                background-size: cover;
                background-position: center;
            }
        }
        .grid-texts {
            width: 60%;
            .texts-container {
                width: 100%;
                height: auto;
                padding: 60px 20px;
                max-width: 598px;
                margin: 0 auto;
                .chapter {
                    font-size: 30px;
                    font-weight: 400;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 20px;
                    line-height: 1.4;
                    font-weight: 300;
                }
                .navigation {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                
            }
            
        }
    }
`