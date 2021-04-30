import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../pages/Main'
import Secundary from '../pages/Secondary'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Main} />
        <Stack.Screen name="  " component={Secundary} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
