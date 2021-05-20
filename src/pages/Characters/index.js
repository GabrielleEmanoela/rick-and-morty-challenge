import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Background, Card } from '~/components';
import api from '~/services/api';
import { characterActions } from '~/store/modules';
import * as Styled from './style';

function Characters() {
  const dispatch = useDispatch();
  const { characters, info } = useSelector(state => state.characterReducer);
  const [filter, setfilter] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  function getCharacters(isRefresh) {
    dispatch(characterActions.getCharacters());
    if (isRefresh) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }
  }

  function onEndReached() {
    if (characters.length < info.count)
      dispatch(characterActions.getCharacters(characters.length / 20 + 1));
  }
  return (
    <Background>
      <Styled.Container>
        <Styled.Title>Rick And Morty</Styled.Title>
        <Styled.Form>
          <Styled.ContainerInput>
            <Styled.Input
              value={filter}
              onChangeText={value => setfilter(value)}
              placeholder="Digite o nome do personagem"
            />
          </Styled.ContainerInput>
        </Styled.Form>
        <Styled.List
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                getCharacters(true);
              }}
            />
          }
          data={characters?.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
          )}
          initialNumToRender={20}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card character={item} />}
          onEndReachedThreshold={0.1}
          onEndReached={onEndReached}
        />
      </Styled.Container>
    </Background>
  );
}

export default Characters;
