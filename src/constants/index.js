/**
 * @namespace constants
 * @desc App constants
 */
import {addOnActionTypeNaming} from 'redux-saga-wrappo';
import {ReducerActionTypesInner} from './Reducer';
import {SagaActionTypesInner} from './Saga';
import * as SiteMap from './SiteMap/';
import * as API from './API';
export {SiteMap, API};
export const Reducer = addOnActionTypeNaming(ReducerActionTypesInner, true);
export const Saga = addOnActionTypeNaming(SagaActionTypesInner, false);
