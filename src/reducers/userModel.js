import {Reducer} from 'constants';

const INITIAL_STATE = {
  username: '',
  password: '',
  isLogon: false,
};

export default {
  namespace: Reducer.userModel,
  state: INITIAL_STATE,
};
