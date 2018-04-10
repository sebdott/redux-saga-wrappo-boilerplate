import { ReducerActionTypes } from '../constants';

const INITIAL_STATE = {};

export default {
  namespace: ReducerActionTypes.themeModel,
  state: INITIAL_STATE,
  reducer: {
    [ReducerActionTypes.themeModel.Other_Reducer](state) {
      return { ...state };
    },
  },
};
