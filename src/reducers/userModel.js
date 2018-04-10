import { ReducerActionTypes } from '../constants';

const INITIAL_STATE = {};

export default {
  namespace: ReducerActionTypes.userModel,
  state: INITIAL_STATE,
  reducer: {
    [ReducerActionTypes.userModel.Other_Reducer](state) {
      return { ...state };
    },
  },
};
