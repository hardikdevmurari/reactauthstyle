import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const NormalText = styled.Text`
  color: black;
`;

const CustomButton = styled.TouchableOpacity`
  background-color: ${props => {
    switch (props.bgColor) {
      case 'secondary':
        return '#F7FAFC';

      case 'primary':
        return '#5E72E4';

      case 'info':
        return '#11CDEF';

      case 'success':
        return '#2DCE89';

      case 'warning':
        return '#FB6340';

      case 'error':
        return '#F5365C';
      default:
        return '#172B4D';
    }
  }};
  padding: 10px;
  width: 80%;
  margin: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 5;
`;

const CustomButtonText = styled.Text`
  color: ${props => {
    switch (props.color) {
      case 'secondary':
        return '#172B4D';

      default:
        return '#F7FAFC';
    }
  }};
  font-size: 20px;
`;

const BreakLine = styled.View`
  height: 10;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <NormalText>List of buttons</NormalText>
      <CustomButton>
        <CustomButtonText>Click Me......</CustomButtonText>
      </CustomButton>
      <BreakLine />
      <CustomButton bgColor={'secondary'}>
        <CustomButtonText color={'secondary'}>Click Me......</CustomButtonText>
      </CustomButton>
      <BreakLine />
      <CustomButton bgColor={'primary'}>
        <CustomButtonText>Click Me......</CustomButtonText>
      </CustomButton>
      <BreakLine />
      <CustomButton bgColor={'info'}>
        <CustomButtonText>Click Me......</CustomButtonText>
      </CustomButton>
      <BreakLine />
      <CustomButton bgColor={'sucsess'}>
        <CustomButtonText>Click Me......</CustomButtonText>
      </CustomButton>
      <BreakLine />
      <CustomButton bgColor={'warning'}>
        <CustomButtonText>Click Me......</CustomButtonText>
      </CustomButton>
      <BreakLine />
      <CustomButton bgColor={'error'}>
        <CustomButtonText>Click Me......</CustomButtonText>
      </CustomButton>
    </Container>
  );
}

export default App;
