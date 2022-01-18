import React from 'react'
import { Dimensions, View } from 'react-native'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'
import Message from '../../components/Message'

const HomeScreen = () => {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 330}}>
                <HomeMap />
            </View>
            
            <Message />
            <HomeSearch />
      
        </View>
    )
}

export default HomeScreen
