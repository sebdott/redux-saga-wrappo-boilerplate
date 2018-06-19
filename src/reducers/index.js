import {generateReducers} from 'redux-saga-wrappo';
import pageModel from './pageModel';
import userModel from './userModel';

export default generateReducers([pageModel, userModel]);
