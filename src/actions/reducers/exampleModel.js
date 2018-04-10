/* @flow */
import { ReducerActionTypes } from '../../constants';

export type DefaultActionType = {
  type: string,
};

export function Other_Reducer(): DefaultActionType {
  return {
    type: ReducerActionTypes.exampleModel.Other_Reducer,
  };
}
