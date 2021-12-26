import React from 'react'
import {View, Text, Button} from 'react-native'
import useAuth from "../hooks/useAuth";
const LoginScreen = () => {
    const {signInWithGoogle} = useAuth();

    return (
        <View>
            <Text>This is a login screen</Text>
            <Button title="signin" onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen
