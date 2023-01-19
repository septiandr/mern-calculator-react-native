import * as React from 'react';
import { StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login';
import Calculator from '../screen/Calculator';
import Register from '../screen/Register';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} style ={{height:5}}/>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;