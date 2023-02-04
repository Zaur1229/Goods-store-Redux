import { ADD_GOOD } from '../constants';

export const addGoodAction = (good) => ({
  type: ADD_GOOD,
  payload: good,
});
