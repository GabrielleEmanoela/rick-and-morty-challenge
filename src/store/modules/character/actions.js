import * as types from './types';
import api from '~/services/api';

function setCharacters(payload) {
  return {
    type: types.SET_CHARACTERS_RESULT,
    payload,
  };
}

function setCharacterUpdate(payload) {
  return {
    type: types.SET_CHARACTER_UPDATE,
    payload,
  };
}

export const getCharacters = (page = 1) => async (dispatch, getState) => {
  try {
    const { characters } = getState().characterReducer;

    const { data } = await api.get(`/character/?page=${page}`);
    const result = {
      ...data,
      results: page > 1 ? [...characters, ...data.results] : data.results,
    };

    dispatch(setCharacters(result));
  } catch (error) {
    dispatch({ type: 'SET_CHARACTERS_ERROR' });
  }
};

export const editCharacter = character => async (dispatch, getState) => {
  try {
    const { characters } = getState().characterReducer;
    const newList = characters.map(item => {
      if (item.id === character.id)
        return {
          ...item,
          name: character.name,
          species: character.species,
          gender: character.gender,
        };
      return item;
    });
    dispatch(setCharacterUpdate(newList));
  } catch (error) {
    dispatch({ type: 'SET_CHARACTERS_ERROR' });
  }
};
