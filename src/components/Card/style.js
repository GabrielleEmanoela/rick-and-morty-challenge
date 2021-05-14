import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #6daf15;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  margin-bottom: 17px;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 3px;
`;

export const Info = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const Label = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: ${({ fontSize }) => fontSize}px;
  margin-bottom: 3px;
  color: #fff;
`;

export const TouchableOpacity = styled.TouchableOpacity``;
