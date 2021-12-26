import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from "./hooks/useAuth";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const { user } = useAuth();
    // const user = true;
    return (
        <Stack.Navigator>
          {user? (
              <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
              </>
          ):(
              <Stack.Screen name="Lrogin" component={LoginScreen} />
          )
          }
         

        </Stack.Navigator>
    );
}

export default StackNavigator

    

