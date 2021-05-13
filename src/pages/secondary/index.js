import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import BackGround from '~/components/Background';
import * as Styled from './style';
import { useNavigation } from '@react-navigation/native';

function CharactersProfile() {
  const navigation = useNavigation();

  return (
    <BackGround>
      <Styled.Container>
        <Styled.Button onPress={() => navigation.goBack()}>
          <Icon name="leftcircle" size={20} color="#000" />
        </Styled.Button>
      </Styled.Container>
    </BackGround>
  );
}

export default CharactersProfile;
