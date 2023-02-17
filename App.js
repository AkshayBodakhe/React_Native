// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './components/Intro';
import Login from './components/Login';
import Contact from './components/Contact';
import AddContact from './components/AddContact';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Intro' component={Intro} options={{headerShown : false}}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Contacts' component={Contact}/>
        <Stack.Screen name='Add Contact' component={AddContact}/>
        </Stack.Navigator>
      </NavigationContainer> 
  
  );
}

const styles = StyleSheet.create({
  
});
