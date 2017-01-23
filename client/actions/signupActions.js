import axios from 'axios';
let baseUrl = 'http://localhost:3000/';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${baseUrl}api/users`, userData); //return the promise
  }
}
