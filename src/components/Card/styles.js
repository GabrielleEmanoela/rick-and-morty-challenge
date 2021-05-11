import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 17px;
  padding: 10px;
  border-radius: 6px;
  background: #6daf15;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 60px;

  height: 60px;
  border-radius: 35px;
`;
export const Info = styled.View`
  margin-left: 25px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: row;
`;
