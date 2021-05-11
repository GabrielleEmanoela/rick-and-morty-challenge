import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { useDispatch, useSelector } from 'react-redux';

import { Background, Card } from '~/components';
import api from '~/services/api';
import { characterActions } from '~/store/modules';
import * as Styled from './style';

function Characters() {
  const dispatch = useDispatch();

  // const [offset, setOffset] = useState(0);
  // const [search, setSearch] = useState(null);
  // const [loadItems, setLoadItems] = useState(false);
  const { characters, info } = useSelector(state => state.characterReducer);

  useEffect(() => {
    dispatch(characterActions.getCharacters());
  }, []);

  //Aplicando filter.

  //Tentando renderizar tudo em uma pagina.
  function onEndReached() {
    if (characters.length < info.count)
      dispatch(characterActions.getCharacters(characters.length / 20 + 1));
  }

  // useEffect(() => {
  //   onEndReached(false);
  // }, [characters]);

  return (
    <Background>
      <Styled.Container>
        <Styled.Title>Rick And Morty</Styled.Title>
        <Styled.Form>
          <Styled.ContainerInput>
            <Styled.Input placeholder="Digite o nome do personagem" />
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
              repos={Characters.repos}
              id={item.id}
              name={item.name}
              image={item.image}
              // status={item.status}
              // type={item.type}
              // gender={item.gender}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
        />
      </Styled.Container>
    </Background>
  );
}

export default Characters;
