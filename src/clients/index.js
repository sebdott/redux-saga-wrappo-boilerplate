/* eslint-disable import/no-duplicates */

import {registerAllComponent} from 'redux-saga-wrappo';
import TagMain from './main';
import TagInject from 'currentClient';
import './vendor/override.less';

export default registerAllComponent(TagMain, TagInject);
