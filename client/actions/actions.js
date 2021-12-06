import * as types from '../constants/actionTypes';

export const sendSearchActionCreator = (city) => ({
    type: types.SEND_SEARCH,
    payload: city
});

export const LOGIN = (user, pass) => ({
    type: types.LOG_IN,
    payload: {username: user, password: pass}
});
