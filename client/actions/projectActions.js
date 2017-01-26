import { UPDATE_PROJECT } from "./types";
import axios from 'axios';
let baseUrl = 'http://localhost:3000/';

export function updateProject (projectData) {// action creator
  return {
    type: UPDATE_PROJECT,
    projectData
  }
}

export function saveProject(proj) {
  return dispatch => {
    return axios.post(`${baseUrl}api/project`, proj); //return the promise
  }
}
