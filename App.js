import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator()

import Usuarios from './screen/Usuario';
import Registros from './screen/Registro';

function MyStack() {
  return (
    <Stack.Navigation>
      <Stack.screen name="Registros" component={Usuarios} />
      <Stack.screen name="Usuarios" component={Registros} />
    </Stack.Navigation>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
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
