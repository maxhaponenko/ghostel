import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styled from 'styled-components'
import image from 'public/images/image_8.webp'
import facebook from 'public/images/social-facebook.png'
import instagram from 'public/images/social-instagram.png'
import logo from 'public/images/logo.png';

const hostelCoordinates = { lat: 49.8387195, lng: 24.027157 }
const bottomShiftedCoordinates = { lat: 49.8421174, lng: 24.0284323 }

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAQPgBRIKNkJ--FmWaZZ2U28McvF7GdTTc"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        new google.maps.Marker({
            position: hostelCoordinates,
            map,
            title: "Hello World!",
        });
        setMap(null)
    }, [])

    return (
        <Section>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    zoom={16}
                    center={window.innerWidth < 900 ? bottomShiftedCoordinates : hostelCoordinates}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{
                        zoomControl: true,
                        mapTypeControl: false,
                        scaleControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        fullscreenControl: false
                    }}
                >
                    <Marker position={hostelCoordinates} title="GHOSTeL - Medieval Hostel" />
                </GoogleMap>
            )}
            <div className="map-contacts-card">
                <div className="image"></div>
                <div>
                    <p>Lviv, Kopernika str. 9/10-B <span>[v]</span><br />3rd floor</p>
                    <p><a href="tel:+380985520299">+38098 55 202 99</a><br /><a href="email:ghostelh@gmail.com">ghostelh@gmail.com</a></p>
                    <div className="social">
                        <div className="item" onClick={() => window.open('https://www.facebook.com/ghostellviv', '_blank')}><img src={facebook}></img></div>
                        <div className="item" onClick={() => window.open('https://www.instagram.com/ghostel.lviv/', '_blank')}><img src={instagram}></img></div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.div`
    width: 100%;
    height: 740px;
    box-shadow: inset 0px 2px 4px rgba(0,0,0,0.5); 
    position: relative;
    @media (max-width: 900px) {
        height: 900px;
    }

    .map-contacts-card {
        height: auto;
        width: 311px;
        padding: 5px;
        position: absolute;
        top: 50%;
        right: calc((100vw - 1400px) / 2);
        transform: translate(0, -50%);
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        @media (max-width: 1420px) {
            right: 20px;
        }
        @media (max-width: 900px) {
            display: flex;
            width: 500px;
            top: 40px;
            left: 50%;
            transform: translate(-50%, 0);
            > *:nth-child(1) {
                width: 45%;
            } 
            > *:nth-child(2) {
                width: 55%;
            } 
        }
        @media (max-width: 565px) {
            width: 85vw;
        }
        .image {
            width: 100%;
            height: 200px;
            border-radius: 12px;
            background-image: url(${image});
            background-position: center;
            background-size: cover;

            @media (max-width: 900px) {
                height: 270px;
            }
            @media (max-width: 565px) {
                flex-grow: 1;
            }
            @media (max-width: 450px) {
                background-image: url(${logo});
                background-size: contain;
                background-repeat: no-repeat;
                background-size: 90%;
                background-position: 120% 50%;
                width: 20%;
                height: 200px;
            }
        }
        > div {
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 565px) {
                flex-grow: 1;
                padding: 15px;
            }
            p {
                text-align: center;
                line-height: 1.5;
                margin-bottom: 20px;
                font-weight: 300;
                @media (max-width: 450px) {
                    font-size: 14px;
                    margin-bottom: 0;
                }
                a {
                    color: black;
                    text-decoration: none;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            .social {
                display: flex;
                justify-content: center;
                .item {
                    transition: transform 100ms ease-in-out;
                    cursor: pointer;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
                .item + .item {
                    margin-left: 20px;
                }
                img {
                    height: 60px;
                    width: auto;
                    @media (max-width: 450px) {
                        height: 40px;
                    }
                }
            }
        }
    }
`

export default React.memo(Map)