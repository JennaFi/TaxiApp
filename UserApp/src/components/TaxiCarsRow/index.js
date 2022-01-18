/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TaxiCarsRow = (props) => {
    const {type, onPress, isSelected} = props
    const getImage = () => {
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.jpeg')
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg')
        }
        if (type.type === 'UberXL') {
            return require('../../assets/images/UberXL.jpeg')
        }
    }
    return (
        <Pressable onPress={onPress}
            style={[styles.container, {backgroundColor: isSelected ? '#efefef' : 'white'}]}>
            {/* Image */}
            <Image style={styles.image} source={getImage()} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>{type.type} {' '}
                    <Ionicons name={'person'} size={18} />
                3
                </Text>
                <Text style={styles.time}>
                    8:03PM drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
               
                <Text style={styles.price}> est. ${type.price}</Text>
            </View>
      
        </Pressable>
    )
}


export default TaxiCarsRow
