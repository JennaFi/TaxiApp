import React, { useState } from 'react'
import { Alert, Dimensions, View } from 'react-native'
import {API, graphqlOperation, Auth} from 'aws-amplify'
import RouteMap from '../../components/RouteMap'
import TaxiCars from '../../components/TaxiCars'
import {useNavigation, useRoute} from '@react-navigation/native'
import {createOrder} from '../../graphql/mutations'

const SearchResults = () => {
    const typeState = useState(null)

    
    const route = useRoute()
    const navigation = useNavigation()
    
    const {originPlace, destinationPlace} = route.params

    const onSubmit = async () => {
        const [type] = typeState
        if (!type) {
            return
            
        } 
        try {
            const userInfo = await Auth.currentAuthenticatedUser()
            const date = new Date()
            const input = {
                createdAt: date.toISOString(),
                type: type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,

                destLatitude: destinationPlace.details.geometry.location.lat,
                destLongitude: destinationPlace.details.geometry.location.lng,

                userId: userInfo.attributes.sub,
                carId: '1',
                
            }
            
            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input: input
                    }
                )
            )

            console.log(response)
            Alert.alert(
                'Hurray!!',
                'Your order has been placed',
                 
            )
        } 
        catch (error) {
            console.error(error)
            
        }

    }

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 320}}>
                <RouteMap origin={originPlace} destination={destinationPlace} /> 
            </View>
            <View style={{height: 400}}>
                <TaxiCars typeState={typeState} onSubmit={onSubmit}/>
            </View>
            
        </View>
    )
}

export default SearchResults
