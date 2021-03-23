import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styled from 'styled-components'
import image from 'public/images/image_8.webp'

const hostelCoordinates = { lat: 49.8387195, lng: 24.027157 }
const leftShiftedCoordinates = { lat: 49.8388848, lng: 24.0282694 }

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
                    center={window.innerWidth > 1000 ? leftShiftedCoordinates : hostelCoordinates}
                    onLoad={onLoad}
                    onUnmount={onUnmount}

                >
                    <Marker position={hostelCoordinates} title="GHOSTeL - Medieval Hostel" />
                </GoogleMap>
            )}
            <div className="contacts-card">
                <img src={image}></img>
                <div>
                    <p>Lviv, Kopernika str. 9/10-B <span>[v]</span><br/>3rd floor</p>
                    <p>+38098 55 202 99<br/>ghostelh@gmail.com</p>
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
    .contacts-card {
        height: auto;
        width: 311px;
        padding: 5px;
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translate(0, -50%);
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        img {
            width: 100%;
            height: auto;
            border-radius: 12px;
        }
        div {
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
                text-align: center;
                line-height: 1.5;
                margin-bottom: 20px;
                font-weight: 300;
            }
        }
    }
`

export default React.memo(Map)