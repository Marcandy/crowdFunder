import { UPDATE_PROJECT } from "./types";
import axios from 'axios';
// let baseUrl = 'http://localhost:3000/';
export const CREATE_PROJ = 'CREATE_PROJ';

export function updateProject (projectData) {// action creator
  return {
    type: UPDATE_PROJECT,
    projectData
  }
}

export function saveProject(proj) {//dont make the project a dispatch it has return an object

  //can do it this way but won be able to do .then wwith it
  //  const request = axios.post(`${baseUrl}api/project`, proj);
  //
  // return {
  //   type: CREATE_PROJ, // Ihave created any real type action for it
  //   payload: request
  // }

  return dispatch => {
    return axios.post(`api/project`, proj); //return the promise
  }
}
