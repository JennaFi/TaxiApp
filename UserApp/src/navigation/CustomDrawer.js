import React from 'react'
import { Pressable, Text, View } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import {Auth} from 'aws-amplify'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: 'black', padding: 15}}>
                {/* UserRow */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                        style={{
                            backgroundColor: '#cacaca',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            marginRight: 10
                        }}
                    />
                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Jenna Fi</Text>
                        <Text style={{color: 'lightgrey'}}>5.00*</Text>
                    </View>
                </View>

                {/* Messages Row */}
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#919191',
                        borderTopWidth: 1,
                        borderTopColor: '#919191',
                        paddingVertical: 5,
                        marginVertical: 10,
                    }}>
                    <Pressable
                        onPress={() => {
                            console.warn('Messages')
                        }}>
                        <Text style={{color: 'white'}}>Make money driving</Text>
                    </Pressable>
                </View>

                {/* Do more */}
                <Pressable
                    onPress={() => {
                        console.warn('Do more')
                    }}>
                    <Text style={{color: 'lightgrey', paddingVertical: 5}}>
              Do more with your account
                    </Text>
                </Pressable>

                {/* Make money */}
                <Pressable
                    onPress={() => {
                        console.warn('Make money driving')
                    }}>
                    <Text style={{color: 'white', paddingVertical: 5}}>
              Make money driving
                    </Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />

            {/* Make money */}
            <Pressable
                onPress={() => {Auth.signOut()}}>
                <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
            </Pressable>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer
