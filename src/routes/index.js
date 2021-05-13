import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Characters from '../pages/Characters';
import CharactersProfile from '../pages/Secondary';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="CharactersProfile" component={CharactersProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
