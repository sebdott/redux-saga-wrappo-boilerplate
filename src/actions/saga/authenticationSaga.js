/* @flow */
import { SagaActionTypes } from '../../constants';

export type DefaultActionType = {
  type: string,
};

export type LoginActionType = {
  type: string,
  payload: Object,
};

export function Login(id: string): LoginActionType {
  return {
    type: SagaActionTypes.authenticationSaga.LOGIN,
    payload: { id },
  };
}

export function getValidatePic(): DefaultActionType {
  return {
    type: SagaActionTypes.authenticationSaga.getValidatePic,
  };
}
