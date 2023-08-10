import React from 'react';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './pages/Settings';
import Account from './pages/Settings/Account';
import Update from './pages/Settings/Update';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Update"
          component={Update}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
