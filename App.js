import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login/Login';
import FormEntrar from './Screens/FormEntrar/FormEntrar';
import Conta from './Screens/Conta/Conta';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}
          options={{ title: "Login", headerShown: false }}
        />
      <Stack.Screen name="FormEntrar" component={FormEntrar}
        options={{ title: "FormEntrar", headerShown: false }}
        />
      <Stack.Screen name="Conta" component={Conta}
        options={{ title: "Conta", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
