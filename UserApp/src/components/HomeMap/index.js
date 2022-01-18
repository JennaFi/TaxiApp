import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {API, graphqlOperation} from 'aws-amplify'
import {listCars} from '../../graphql/queries'

const HomeMap = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await API.graphql(
                    graphqlOperation(
                        listCars
                    )
                ) 
                setCars(response.data.listCars.items)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCars()
    }, [])

    const getImage = (type) => {
        if (type === 'UberX') {
            return require('../../assets/images/top-UberX.png')
        }
        if (type === 'Comfort') {
            return require('../../assets/images/top-Comfort.png')
        }
        if (type === 'UberXL') {
            return require('../../assets/images/top-UberXL.png')
        }
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
            }}>
            {cars.map(car => (
                <Marker
                    key={car.id}
                    coordinate={{latitude: car.latitude, longitude: car.longitude}}>
                    <Image
                        style={{
                            width: 50, 
                            height: 50, 
                            resizeMode: 'contain',
                            transform: [{
                                rotate: `${car.heading}deg`
                            }]
                        }}
                        source={getImage(car.type)}
                    />
                </Marker>
            ))}
        </MapView>
    )
}

export default HomeMap
