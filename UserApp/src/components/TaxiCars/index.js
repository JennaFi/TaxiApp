import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import TaxiCarsRow from '../TaxiCarsRow'
import typesData from '../../assets/data/types'

// eslint-disable-next-line react/prop-types
const TaxiCars = ({typeState, onSubmit}) => {
    const [selectedType, setSelectedType] = typeState
    
    return (
        <View>
            {typesData.map(type => (
                <TaxiCarsRow 
                    type={type} 
                    key={type.id}
                    isSelected={type.type === selectedType }
                    onPress={() => setSelectedType(type.type)} />
            ))}
            <Pressable
                onPress={onSubmit}
                style={{
                    
                    backgroundColor: 'black',
                    padding: 5,
                    margin: 10,
                    alignItems: 'center'
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Taxi</Text>
            </Pressable>
        </View>
    )
}

export default TaxiCars
