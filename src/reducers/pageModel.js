import {Reducer} from 'constants';

const INITIAL_STATE = {
  isLoading: false,
  isOverlay: false,
  progressInd: 0.0,
};

export default {
  namespace: Reducer.pageModel,
  state: INITIAL_STATE,
  reducer: {},
};
