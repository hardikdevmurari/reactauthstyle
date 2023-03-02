import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from './App';

function SignUp(props) {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Button
        title="SignUp"
        onPress={() => {
          setIsAuth(true);
          console.log('................', isAuth, setIsAuth);
        }}
      />
       <Text />
      <Button
        title="Log In"
        onPress={() => {
          props?.navigation?.navigate('Login');
        }}
      />
    </View>
  );
}

export default SignUp;
