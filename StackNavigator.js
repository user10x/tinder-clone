import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './ChatScreen';

const Stack = createNativeStackNavigator();

function HomeScreen2() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  


const StackNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Home2" component={HomeScreen2} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator

    

