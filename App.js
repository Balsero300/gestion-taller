import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator()

import Usuarios from './screen/Usuario';
import Registros from './screen/Registro';

function myStack() {
  return (
    <Stack.Navigation>
      <Stack.screen component={Usuarios} />
      <Stack.screen component={Registros} />
    </Stack.Navigation>
  )
}
export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
