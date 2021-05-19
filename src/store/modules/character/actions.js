import * as types from './types';
import api from '~/services/api';

function setCharacters(payload) {
  return {
    type: types.SET_CHARACTERS_RESULT,
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

// export const editCharacter
