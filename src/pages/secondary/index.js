import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import BackGround from '~/components/Background';
import * as Styled from './style';

function CharactersProfile({
  navigation,
  route: {
    params: {
      character: { image, name, species, gender },
    },
  },
}) {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <BackGround>
      <Styled.Container>
        <Styled.Back onPress={() => navigation.goBack()}>
          <Icon name="left" size={25} color="white" />
        </Styled.Back>
        <Styled.Content>
          <Styled.ContainerEditIcon onPress={() => setIsEditable(!isEditable)}>
            <Icon name="edit" size={25} color="white" />
          </Styled.ContainerEditIcon>

          <Styled.Logo source={{ uri: image }} />

          <Styled.TextInput
            value={name}
            onChangeText={name => map(value)}
            editable={isEditable}
          />
          <Styled.TextInput
            value={species}
            onChangeText={species => map(value)}
            editable={isEditable}
          />
          <Styled.TextInput
            value={gender}
            onChangeText={gender => map(value)}
            editable={isEditable}
          />
          <Styled.onSubmit onPress={() => navigation.goBack()}>
            <Icon name="down-square-o" size={25} color="white" />
          </Styled.onSubmit>
        </Styled.Content>
      </Styled.Container>
    </BackGround>
  );
}

export default CharactersProfile;
