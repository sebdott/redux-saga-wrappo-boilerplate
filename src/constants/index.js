/**
 * @namespace constants
 * @desc App constants
 */
import { addOnActionTypeNaming } from 'redux-saga-wrappo/addOnActionTypeNaming';
import { ReducerActionTypesInner } from './Reducer';
import { SagaActionTypesInner } from './Saga';

export * as API from './API';

export const ReducerActionTypes = addOnActionTypeNaming(
  ReducerActionTypesInner,
  true,
);
export const SagaActionTypes = addOnActionTypeNaming(
  SagaActionTypesInner,
  false,
);
