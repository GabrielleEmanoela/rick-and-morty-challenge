import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import { Background, Card } from '~/components';
import { characterActions } from '~/store/modules';
import * as Styled from './style';

function Characters() {
  const dispatch = useDispatch();
  const { characters } = useSelector(state => state.characterReducer);

  useEffect(() => {
    dispatch(characterActions.getCharacters());
  }, []);

  return (
    <Background>
      <Styled.Container>
        <Styled.Title>Rick And Morty</Styled.Title>
        <Styled.Form>
          <Styled.ContainerInput>
            <Styled.Input
              autoCorret={false}
              placeholder="Digite o nome do personagem"
            />
          </Styled.ContainerInput>

          <Styled.SubmitButton>
            <Icon name="search" size={20} color="#000" />
          </Styled.SubmitButton>
        </Styled.Form>
        <Styled.List
          data={characters}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
              type={item.type}
              gender={item.gender}
            />
          )}
        />
      </Styled.Container>
    </Background>
  );
}

export default Characters;
