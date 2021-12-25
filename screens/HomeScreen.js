import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core';
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text > I am the HomeScreen </Text>
            <Button onPress={()=>navigation.navigate("Chat")} title="Go to ChatScreen"/>
        </View>
    )
}

export default HomeScreen
