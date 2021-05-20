import * as types from './types';

const INITIAL_STATE = {
  info: {},
  characters: [],
};

export default function characterReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_CHARACTERS_RESULT:
      return { ...state, info: payload.info, characters: payload.results };
    case types.SET_CHARACTER_UPDATE:
      return { ...state, characters: payload };
    default:
      return state;
  }
}
