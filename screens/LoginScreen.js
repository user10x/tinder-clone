import React from 'react'
import { View, Text } from 'react-native'
import useAuth from "../hooks/useAuth";
const LoginScreen = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <View>
            <Text>This is a login screen</Text>
        </View>
    )
}

export default LoginScreen
