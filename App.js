import React, {createContext, useState} from 'react';
import {SafeAreaView, View, ScrollView, TextInput} from 'react-native';
import styled from 'styled-components/native';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './LoginScreen';
import SignUp from './Signup';
const Stack = createNativeStackNavigator();

export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const authContext = {
    isAuth,
    setIsAuth,
  };
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {isAuth ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
