import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import useAuth from "../hooks/useAuth";
const HomeScreen = () => {
    const navigation = useNavigation();
    const {logout} = useAuth();
    return (
        <View>
            <Text > I am the HomeScreen </Text>
            <Button onPress={()=>navigation.navigate("Chat")} title="Go to ChatScreen"/>
        <Button title="logout" onPress={logout}/>
        </View>
    )
}

export default HomeScreen
