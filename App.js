import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-rn';
import StackNavigator from './StackNavigator';
import {AuthProvider} from "./hooks/useAuth";
export default function App() {
  return (
    <NavigationContainer>
        <AuthProvider>
            <StackNavigator/>
        </AuthProvider>
    </NavigationContainer>
    );
}

