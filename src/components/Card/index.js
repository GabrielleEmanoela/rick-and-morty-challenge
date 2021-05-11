import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Left, Avatar, Name, Info } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Card({ id, name, image, status, type, gender }) {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: image,
          }}
        />
        <Info>
          <TouchableOpacity onPress={() => {}}>
            <Name>{name}</Name>
          </TouchableOpacity>
        </Info>
      </Left>
    </Container>
  );
}

export default Card;
