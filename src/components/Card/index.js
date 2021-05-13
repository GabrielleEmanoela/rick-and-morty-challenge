import React from 'react';
import * as Styled from './style';
import { useNavigation } from '@react-navigation/native';

function Card({ id, name, image, status, type, gende }) {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Left>
        <Styled.Avatar
          source={{
            uri: image,
          }}
        />
        <Styled.Info>
          <Styled.TouchableOpacity
            onPress={() => navigation.navigate('CharactersProfile')}>
            <Styled.Name>{name}</Styled.Name>
          </Styled.TouchableOpacity>
        </Styled.Info>
      </Styled.Left>
    </Styled.Container>
  );
}

export default Card;
