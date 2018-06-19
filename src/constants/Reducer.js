import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @constant {Object} Reducer
 * @memberof Constants
 */

export const ReducerActionTypesInner = {
  themeModel: keyMirror({
    Other_Reducer: undefined,
  }),
  userModel: keyMirror({}),
  appModel: keyMirror({}),
  pageModel: keyMirror({}),
};
/**
 * @constant {Object} ReducerDefaultActionTypes
 * @memberof Constants
 */

export const ReducerDefaultActionTypes = keyMirror({
  UPDATE_STATE: undefined,
  REMOVE_STATE: undefined,
  INITIALIZE_STATE: undefined,
  INITIALIZE_ALL: undefined,
});
