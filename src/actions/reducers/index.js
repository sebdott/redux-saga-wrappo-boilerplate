import { addReducerDefaultActionType } from 'redux-saga-wrappo/generateReducers';
import { ReducerActionTypesInner } from '../../constants/Reducer';

export * as exampleReducer from './exampleModel';

const defaultReducerActions = addReducerDefaultActionType(
  ReducerActionTypesInner,
);
export { defaultReducerActions };
