import {generateReducers} from 'rs-wrappo';
import pageModel from './pageModel';
import userModel from './userModel';

export default generateReducers([pageModel, userModel]);
