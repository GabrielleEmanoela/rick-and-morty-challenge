import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import BackGround from '~/components';
// import { SubmitButton } from '../Characters/style';

function CharactersProfile() {
  return (
    <BackGround>
      <Container>
        <Title></Title>
        <Form>
          {/* <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton> */}
        </Form>
      </Container>
    </BackGround>
  );
}

export default CharactersProfile;
