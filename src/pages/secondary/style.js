import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  background-color: #6daf15;
  width: 90%;
  height: 45%;
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
  left: 95%;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
`;

export const TextInput = styled.TextInput`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;
export const onSubmit = styled.TouchableOpacity`
  top: 30px;
`;
