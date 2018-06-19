import {Saga} from 'constants';

function callGitRepo() {
  return {
    type: Saga.pageSaga.callGitRepo,
  };
}

function putUserLogin() {
  return {
    type: Saga.pageSaga.putUserLogin,
  };
}

function getUserLogout() {
  return {
    type: Saga.pageSaga.getUserLogout,
  };
}

export {callGitRepo, putUserLogin, getUserLogout};
