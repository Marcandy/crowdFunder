import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    axios.post('/api/users', userData); //return the promise
  }
}
