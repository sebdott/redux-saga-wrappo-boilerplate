import { registerAllComponent } from 'redux-saga-wrappo/registerAllComponent';
import TagMain from './main';
import TagInject from 'injectClient';

export default registerAllComponent(TagMain, TagInject);
