import { View, Text } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Characters from '../pages/Characters';
import Secundary from '../pages/Secondary';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name=" Main" component={Characters} />
        <Stack.Screen name="Secondary" component={Secundary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
