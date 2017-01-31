import axios from 'axios';
// let baseUrl = 'http://localhost:3000/';
export const SAVE_ID = 'SAVE_ID';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`api/users`, userData); //return the promise
  }
}

export function addUser(user){
  return {
    type:'SAVE_ID',
    user
  }
}
