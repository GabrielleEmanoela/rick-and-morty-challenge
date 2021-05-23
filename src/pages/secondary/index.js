import React, { useState, UseEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { characterActions } from '~/store/modules';

import * as Styled from './style';
import BackGround from '~/components/Background';
import { editCharacter } from '~/store/modules/character/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  species: Yup.string().required('Campo obrigatório.'),
  gender: Yup.string().required('Campo obrigatório.'),
});

function CharactersProfile({
  navigation,
  route: {
    params: {
      character: { id, image, name, species, gender },
    },
  },
}) {
  const dispatch = useDispatch();
  const { characters, info } = useSelector(state => state.characterReducer);
  const [isEditable, setIsEditable] = useState(false);

  const {
    register,
    getValues,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setIsEditable(false);
    dispatch(characterActions.editCharacter({ id, ...data }));
  };

  return (
    <BackGround>
      <Styled.Container>
        <Styled.Back onPress={() => navigation.goBack()}>
          <Icon name="left" size={25} color="white" />
        </Styled.Back>
        <Styled.Content>
          {!isEditable && (
            <Styled.ContainerEditIcon
              onPress={() => setIsEditable(!isEditable)}>
              <Icon name="edit" size={25} color="white" />
            </Styled.ContainerEditIcon>
          )}
          <Styled.Logo source={{ uri: image }} />
          <Styled.ContainerInput>
            <Styled.Icon>
              <Icon name="user" size={20} color="rgba(255,255,255,0.6)" />
            </Styled.Icon>
            <Controller
              control={control}
              // rules={{
              //   validate: name =>
              //     schema.validate({ name }).catch(e => e.message),
              // }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Styled.TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={value => onChange(value)}
                  editable={isEditable}
                />
              )}
              name="name"
              rules={{ required: true }}
              defaultValue={name}
            />
          </Styled.ContainerInput>
          {errors.name && <Styled.Label>{errors.name.message}</Styled.Label>}

          <Styled.ContainerInput>
            <Styled.Icon>
              <Icon name="woman" size={20} color="rgba(255,255,255,0.6)" />
            </Styled.Icon>
            <Controller
              control={control}
              // rules={{
              //   validate: species =>
              //     schema.validate({ species }).catch(e => e.message),
              // }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Styled.TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={value => onChange(value)}
                  editable={isEditable}
                />
              )}
              name="species"
              rules={{ required: true }}
              defaultValue={species}
            />
          </Styled.ContainerInput>
          {errors.species && (
            <Styled.Label>{errors.species.message}</Styled.Label>
          )}

          <Styled.ContainerInput>
            <Styled.Icon>
              <Icon name="man" size={20} color="rgba(255,255,255,0.6)" />
            </Styled.Icon>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Styled.TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={value => onChange(value)}
                  editable={isEditable}
                />
              )}
              name="gender"
              rules={{ required: true }}
              defaultValue={gender}
            />
          </Styled.ContainerInput>
          {errors.gender && (
            <Styled.Label>{errors.gender.message}</Styled.Label>
          )}

          {isEditable && (
            <Styled.onSubmit onPress={handleSubmit(onSubmit)}>
              <Styled.onSubmitText>Salvar</Styled.onSubmitText>
            </Styled.onSubmit>
          )}
        </Styled.Content>
      </Styled.Container>
    </BackGround>
  );
}
export default CharactersProfile;
