import * as actionTypes from './actionTypes';

export const SELECT_USER = {
  type: actionTypes.SELECT_USER
};

export const GRANT_PERMISSION = {
  type: actionTypes.GRANT_PERMISSION
}

export const selectUser = (user: any) => {
  return {
    type: actionTypes.SELECT_USER,
    payload: user
  }
}