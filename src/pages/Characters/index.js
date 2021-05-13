import { set } from 'immer/dist/internal';
import React, { useEffect } from 'react';
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
  useEffect(() => {
    dispatch(characterActions.getCharacters());
  }, []);

  //Aplicando filter.
  // const onSubmit = valueSet => {
  //   const CharacterInfo = { ...characters, name: valueSet };
  //   dispatch(characterActions.getCharacters());
  //   const filter = characters.map(item => {
  //     if (item.id === characters.info) {
  //       return CharacterInfo;
  //     } else {
  //       return item;
  //     }
  //   });
  // };

  //Tentando renderizar tudo em uma pagina.
  function onEndReached() {
    if (characters.length < info.count)
      dispatch(characterActions.getCharacters(characters.length / 20 + 1));
  }

  const filterCount = 

  return (
    <Background>
      <Styled.Container>
        <Styled.Title>Rick And Morty</Styled.Title>
        <Styled.Form>
          <Styled.ContainerInput>
            <Styled.Input
              // autoCorrect={false}
              // autoCapitalize="none"
              // value={valueSet}
              //returnKeyType="send"
              onChangeText={e => setFilter(e.target.value)} //teste tem que ser um valor vazio
              placeholder="Digite o nome do personagem"
            />
          </Styled.ContainerInput>
          <Styled.SubmitButton onPress={() => console.tron.log('teste')}>
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
