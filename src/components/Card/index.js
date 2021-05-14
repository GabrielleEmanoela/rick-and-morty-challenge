import React from 'react';

import * as Styled from './style';
import { useNavigation } from '@react-navigation/native';

function Card({ character }) {
  const navigation = useNavigation();
  const { name, image, species, gender } = character;

  return (
    <Styled.Container
      onPress={() => navigation.navigate('CharactersProfile', { character })}>
      {character && (
        <Styled.Content>
          <Styled.Avatar
            source={{
              uri: image,
            }}
          />
          <Styled.Info>
            <Styled.Label isBold fontSize={16}>
              {name}
            </Styled.Label>
            <Styled.Label fontSize={12}>Specie: {species}</Styled.Label>
            <Styled.Label fontSize={12}>Gender: {gender}</Styled.Label>
          </Styled.Info>
        </Styled.Content>
      )}
    </Styled.Container>
  );
}

export default Card;
