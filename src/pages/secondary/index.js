import React, { useState, UseEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import * as Styled from './style';
import BackGround from '~/components/Background';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  species: Yup.string().required('Campo obrigatório.'),
  gender: Yup.string().required('Campo obrigatório.'),
});

function CharactersProfile({
  navigation,
  route: {
    params: {
      character: { image, name, species, gender },
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

  // function onSubmit() {
  //   const ArrChar = characters.map(item => {
  //     if (item.id === characters.id) {
  //       dispatch(characterActions(data));
  //     } else {
  //     }
  //   });
  //   // console.tron.log(characters.id);
  //   // console.tron.log(ArrChar);
  //   // console.tron.log(value);
  //   // dispatch(characterAction(value));
  // }
  // function onSubmit() {
  //   // const values = getValues();
  //   const ArrCharacter = characters.map(item => {
  //     if (item.id === characters.id) {
  //     }
  //   });
  // }

  const onSubmit = data => {
    console.tron.log(data);
    setIsEditable(false);
  };

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
            name="name"
            rules={{ required: true }}
            defaultValue={name}
          />
          {errors.name && <Styled.Label>This is required.</Styled.Label>}

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
            name="species"
            rules={{ required: true }}
            defaultValue={species}
          />
          {errors.species && <Styled.Label>This is required.</Styled.Label>}

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
          {errors.gender && <Styled.Label>This is required.</Styled.Label>}
          {isEditable && (
            <Styled.onSubmit onPress={handleSubmit(onSubmit)}>
              <Icon name="down-square-o" size={25} color="white" />
            </Styled.onSubmit>
          )}
        </Styled.Content>
      </Styled.Container>
    </BackGround>
  );
}
export default CharactersProfile;
