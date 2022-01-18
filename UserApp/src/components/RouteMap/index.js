import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY='AIzaSyCh2_yOjVx5a8zdvxNpX76WWrHmOdjQrxk'

const RouteMap = ({origin, destination}) => {
    
    const originLocation = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }
    
    const destinationLocation = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }

    
    return (
        <MapView
            style={{height: '100%', width: '100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={originLocation}
                destination={destinationLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='hotpink'
            />
            <Marker 
                coordinate={originLocation}
                title={'Origin'}
            />
            
            <Marker 
                coordinate={destinationLocation}
                title={'Destination'}
            />
            
        </MapView>    


    
    )
}

export default RouteMap
