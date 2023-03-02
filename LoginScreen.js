import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from './App';

function Login(props) {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          setIsAuth(true);
          console.log('................', isAuth, setIsAuth);
        }}
      />
      <Text />
      <Button
        title="Try To Move Main Screen Without Login"
        onPress={() => {
          props?.navigation?.navigate('Home');
        }}
      />
       <Text />
      <Button
        title="Sign Up"
        onPress={() => {
          props?.navigation?.navigate('SignUp');
        }}
      />
    </View>
  );
}

export default Login;
