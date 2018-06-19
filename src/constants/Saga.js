import keyMirror from 'fbjs/lib/keyMirror';
/**
 * @constant {Object} Reducer
 * @memberof Constants
 */

export const SagaActionTypesInner = {
  errorSaga: keyMirror({
    postErrorNotification: undefined,
  }),
  pageSaga: keyMirror({
    callGitRepo: undefined,
    putUserLogin: undefined,
    getUserLogout: undefined,
  }),
};
