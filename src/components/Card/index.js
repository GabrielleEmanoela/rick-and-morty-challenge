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
            <Name>{gender}</Name>
            <Name>{status}</Name>
            <Name>{type}</Name>
          </TouchableOpacity>
        </Info>
      </Left>
      <Icon name="event-busy" size={20} color="#000" />
    </Container>
  );
}

export default Card;
