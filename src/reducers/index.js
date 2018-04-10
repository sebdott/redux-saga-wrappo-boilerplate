import { generateReducers } from 'redux-saga-wrappo/generateReducers';
import exampleModel from './exampleModel';
import themeModel from './themeModel';
import userModel from './userModel';

export default generateReducers([exampleModel, themeModel, userModel]);
