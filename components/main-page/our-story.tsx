import React, { useState, useEffect } from 'react'
import { useSprings, animated, config } from 'react-spring'
import styled from 'styled-components'
import image from 'public/images/image_5.jpg'
import image1 from 'public/images/image_7.jpg';
import image2 from 'public/images/image_4.jpg';
import image3 from 'public/images/image_6.jpg';
import Button from 'components/forms/button';

const images = [image, image1, image2, image3]
const texts: {[key: number]: { title: string; text: string}} = {
    0: {
        title: 'Start',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    },
    1: {
        title: 'Pt 2',
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    2: {
        title: 'New Goals',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    },
    3: {
        title: 'And now',
        text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
}

const getAnimation = (items) => (index) => {
    const isVisible = items[index] === true
    const rotationMap = {
        0: '0deg',
        1: '0deg',
        2: '0deg',
        3: '0deg',
    }
    const translateMap = {
        0: '-3%; -3%',
        1: '-1%; -1%',
        2: '1%; 1%',
        3: '3%; 3%',
    }
    return {
        from: {
            transform: 'translate(-300%, 0%) rotate(-45deg)',
        },
        to: {
            transform: isVisible ? `translate(${translateMap[index]}) rotate(${rotationMap[index]})` : 'translate(-300%, 0%) rotate(-45deg)',
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
    let [activeText, setActiveText] = useState(0)

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

    const nextPart = () => {
        if (activeText < (Object.keys(texts).length - 1)) {
            hideFrontPhoto()
            setActiveText(activeText + 1)
        }
    }
    const prevPart = () => {
        if (activeText > 0) {
            showHiddenPhoto()
            setActiveText(activeText - 1)
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
                            <div className="chapter">{texts[activeText].title}</div>
                            <p>{texts[activeText].text}</p>
                            <div className="navigation">
                                <Button 
                                    onClick={() => prevPart()} 
                                    size="md" 
                                    type="outline" 
                                    color="primary" 
                                    disabled={activeText === 0} 
                                    style={activeText === 0 ? {opacity: 0} : null} 
                                >
                                    Previous
                                </Button>
                                <Button 
                                    onClick={() => nextPart()} 
                                    size="md" 
                                    type="outline" 
                                    color="primary" 
                                    disabled={activeText === (Object.keys(texts).length - 1)}
                                    style={activeText === (Object.keys(texts).length - 1) ? {opacity: 0} : null} 
                                >
                                    Next
                                </Button>
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
            @media (max-width: 1000px) {
                width: 50%;
            }
            @media (max-width: 850px) {
                width: 100%;
            }
            @media (max-width: 850px) {
                margin-bottom: 50px;
            }
            .photos-container {
                height: 500px;
                width: 100%;
                display: flex;
                justify-content: center;
                @media (max-width: 850px) {
                    height: auto;
                    margin-bottom: 57%;
                }
            }
            .photo {
                position: absolute;
                height: 501px;
                width: 341px;
                border-radius: 15px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.5);
                /* border: 1px solid rgba(255,255,255,0.2); */

                background-size: cover;
                background-position: center;

                @media (max-width: 850px) {
                    height: auto;
                    width: 75%;
                    padding-top: 56%;
                    border-radius: 10px;
                    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
                }   
                @media (max-width: 499px) {
                    height: auto;
                    width: 90%;
                    padding-top: 56%;
                }   
            }
        }
        .grid-texts {
            width: 60%;
            display: flex;
            align-items: center;
            @media (max-width: 1000px) {
                width: 50%;
            }
            @media (max-width: 850px) {
                width: 100%;
            }
            .texts-container {
                width: 100%;
                height: auto;
                padding: 0px 20px;
                max-width: 598px;
                margin: 0 auto;
                min-height: 325px;
                position: relative;
                @media (max-width: 1000px) {
                    min-height: 425px;
                }
                @media (max-width: 850px) {
                    min-height: unset;
                }
                .chapter {
                    font-size: 30px;
                    font-weight: 400;
                    margin-bottom: 10px;
                    @media (max-width: 850px) {
                        font-size: 28px;
                        /* line-height: 1.3; */
                    }  
                }
                p {
                    font-size: 20px;
                    line-height: 1.4;
                    font-weight: 300;
                    @media (max-width: 850px) {
                        font-size: 18px;
                        line-height: 1.3;
                    }  
                }
                .navigation {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                    position: absolute;
                    bottom: 0;
                    width: calc(100% - 40px);
                    @media (max-width: 850px) {
                       position: relative;
                       width: 100%;
                    }
                }
                
            }
            
        }
    }
`