import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;
export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding: 20px;
`;
export const ContainerInput = styled.View`
  flex: 1;
  height: 40px;
  margin-left: 10px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const Input = styled.TextInput`
  flex: 1;
  color: #444;
  height: 40px;
  margin-left: 10px;
  align-items: center;
`;

export const SubmitButton = styled.View`
justify-content:center;
left:-30px
border-radius:4px;
margin-left:-10px
background:#6DAF15`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  margin-top: -15px;
`;
