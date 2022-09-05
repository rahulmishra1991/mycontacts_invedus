import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDrawerNavigator from './components/AppDrawerNavigator';

// import {
//   HomeScreen
// } from './screens';

const Stack = createNativeStackNavigator()
const Router = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={AppDrawerNavigator} options={{headerShown: false}} />            
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router