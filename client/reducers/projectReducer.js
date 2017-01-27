import {UPDATE_PROJECT} from '../actions/types';
import axios from 'axios';
let baseUrl = 'http://localhost:3000/';

const project = {};

export default (state = project, action = { }) => {

  switch (action.type) {
    case UPDATE_PROJECT:
    console.log(action);
      return Object.assign({}, state, action.projectData )
    default: return state

  }

}
