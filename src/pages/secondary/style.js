import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  background-color: #6daf15;
  width: 90%;
  height: 60%;
  margin-top: 20%;
  align-items: center;
  padding: 15px 10px 10px 10px;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 90%;
  color: #fff;
`;

export const ContainerEditIcon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 95%;ððð
`;

export const Label = styled.Text`
  font-size: 10px;
  color: #ff0000;
  flex-direction: center;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  color: #ffff;
  font-weight: bold;
  margin-top: 20px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;
export const onSubmit = styled.TouchableOpacity`
  top: 30px;
  background-color: #ffff;
`;
export const onSubmitText = styled.Text`
  color: #6daf15;
  font-weight: bold;

  padding: 10px 10px 10px 10px;
`;
