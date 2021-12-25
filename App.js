import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-rn';
import StackNavigator from './StackNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>
    );
}

