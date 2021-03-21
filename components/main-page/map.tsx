import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styled from 'styled-components'

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
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    zoom={16}
                    center={window.innerWidth > 1000 ? leftShiftedCoordinates : hostelCoordinates}
                    onLoad={onLoad}
                    onUnmount={onUnmount}

                >
                    <Marker position={hostelCoordinates} title="GHOSTeL - Medieval Hostel" />
                </GoogleMap>
            ) : <></>}
        </Section>
    )


}

const Section = styled.div`
    width: 100%;
    height: 740px;
    box-shadow: inset 0px 2px 4px rgba(0,0,0,0.5); 
    position: relative;
`

export default React.memo(Map)