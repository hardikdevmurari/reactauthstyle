import React from 'react';
import {SafeAreaView, View, ScrollView, TextInput} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f8f9fe;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 0;
  width: 100%;
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
  font-weight: 500;
`;

const BreakLine = styled.View`
  height: 10px;
  width: 100%;
`;

const H1 = styled.Text`
  font-size: 44;
  color: #32325d;
  line-height: 60px;
  font-weight: 400;
`;

const H2 = styled.Text`
  font-size: 40;
  color: #32325d;
  line-height: 55px;
  font-weight: 400;
`;

const H3 = styled.Text`
  font-size: 32;
  color: #32325d;
  line-height: 43px;
  font-weight: 400;
`;

const H4 = styled.Text`
  font-size: 24;
  color: #32325d;
  line-height: 33px;
  font-weight: 400;
`;

const H5 = styled.Text`
  font-size: 18;
  color: #32325d;
  line-height: 24px;
  font-weight: 400;
`;

const P = styled.Text`
  font-size: 16;
  color: #32325d;
  line-height: 22px;
  font-weight: 400;
`;

const Pmuted = styled.Text`
  font-size: 16;
  color: #8898aa;
  line-height: 22px;
  font-weight: 400;
`;

const TextInputDefault = styled.TextInput`
  width: 80%;
  border-width: 1px;
  border-color: #11cdef;
  border-radius: 5px;
  color: #8898aa;
  padding: 10px;
  font-size: 14px;
  line-height: 19px;
`;

const TextInputFill = styled.TextInput`
  width: 80%;
  border-width: 1px;
  border-color: #cad1d7;
  background-color: #e9ecef;
  border-radius: 5px;
  color: #8898aa;
  padding: 10px;
  font-size: 14px;
  line-height: 19px;
`;

const TextInputSuccess = styled.TextInput`
  width: 80%;
  border-width: 1px;
  border-color: #2dce89;
  border-radius: 5px;
  color: #2dce89;
  padding: 10px;
  font-size: 14px;
  line-height: 19px;
`;

const TextInputWarning = styled.TextInput`
  width: 80%;
  border-width: 1px;
  border-color: #fb6340;
  border-radius: 5px;
  color: #fb6340;
  padding: 10px;
  font-size: 14px;
  line-height: 19px;
`;

const Card1 = styled.View`
background-color: white;
width: 90%;
height: 130px;
border-radius: 5px;
shadow-color: #000;
shadow-offset: {width: 0, height: 2};
shadow-opacity: 0.8;
shadow-radius: 2;
elevation: 5;
justify-content: center;
align-items: center;
flex-direction: row;
overflow: hidden;
`;

const Card2 = styled.View`
background-color: white;
width: 164px;
height: 220px;
border-radius: 5px;
shadow-color: #000;
shadow-offset: {width: 0, height: 2};
shadow-opacity: 0.8;
shadow-radius: 2;
elevation: 5;
flex-direction: column;
overflow: hidden;
`;

const Card3 = styled.View`
background-color: white;
width: 350px;
height: 260px;
border-radius: 5px;
shadow-color: #000;
shadow-offset: {width: 0, height: 2};
shadow-opacity: 0.8;
shadow-radius: 2;
elevation: 5;
flex-direction: column;
overflow: hidden;
`;

const CardImage = styled.Image`
  flex: ${props => {
    return props.flex ? props.flex : 1;
  }};
  width: 100%;
  height: 100%;
`;

const CardContent = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const BlueText = styled.Text`
  color: #5e72e4;
  font-size: 12;
  line-height: 17;
  font-weight: bold;
`;

function App() {
  return (
    <ScrollView>
      <Container>
        <Container>
          <NormalText>List of buttons</NormalText>
          <CustomButton>
            <CustomButtonText>Click Me......</CustomButtonText>
          </CustomButton>
          <BreakLine />
          <CustomButton bgColor={'secondary'}>
            <CustomButtonText color={'secondary'}>
              Click Me......
            </CustomButtonText>
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
          <CustomButton bgColor={'success'}>
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
        <Container>
          <NormalText>Typography</NormalText>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <P>Paragraph</P>
          <Pmuted>This is Muted Paragraph</Pmuted>
        </Container>
        <Container>
          <NormalText>Inputs</NormalText>
          <BreakLine />
          <TextInputDefault
            placeholder="Regular"
            placeholderTextColor={'#8898AA'}
          />
          <BreakLine />
          <TextInputFill
            placeholder="Regular"
            placeholderTextColor={'#8898AA'}
          />
          <BreakLine />
          <TextInputSuccess
            placeholder="Regular"
            placeholderTextColor={'#2dce89'}
          />
          <BreakLine />
          <TextInputWarning
            placeholder="Regular"
            placeholderTextColor={'#FB6340'}
          />
        </Container>
        <Container>
          <NormalText>Cards</NormalText>
          <BreakLine />
          <BreakLine />
          <Card1>
            <CardImage
              source={{
                uri: 'https://images.pexels.com/photos/10297624/pexels-photo-10297624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <CardContent>
              <H5>Get started with Argon</H5>
              <BlueText>View article</BlueText>
            </CardContent>
          </Card1>
          <BreakLine />
          <BreakLine />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <Card2>
              <CardImage
                source={{
                  uri: 'https://images.pexels.com/photos/10297624/pexels-photo-10297624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}
              />
              <CardContent>
                <H5>Get started with Argon</H5>
                <BlueText>View article</BlueText>
              </CardContent>
            </Card2>
            <Card2>
              <CardImage
                source={{
                  uri: 'https://images.pexels.com/photos/10297624/pexels-photo-10297624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}
              />
              <CardContent>
                <H5>Get started with Argon</H5>
                <BlueText>View article</BlueText>
              </CardContent>
            </Card2>
          </View>
          <BreakLine />
          <BreakLine />
          <Card3>
            <CardImage
              flex={3}
              source={{
                uri: 'https://images.pexels.com/photos/10297624/pexels-photo-10297624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <CardContent>
              <H5>Get started with Argon</H5>
              <BlueText>View article</BlueText>
            </CardContent>
          </Card3>
        </Container>
      </Container>
    </ScrollView>
  );
}

export default App;
