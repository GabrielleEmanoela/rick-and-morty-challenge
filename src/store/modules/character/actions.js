import * as types from './types';
import api from '~/services/api';

function setCharacters(payload) {
  return {
    type: types.SET_CHARACTERS_RESULT,
    payload,
  };
}

export const getCharacters = () => async dispatch => {
  try {
    const { data } = await api.get('/character');
    dispatch(setCharacters(data));
  } catch (error) {
    dispatch({ type: 'SET_CHARACTERS_ERROR' });
  }
};
