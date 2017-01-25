import {UPDATE_PROJECT} from '../actions/types';

const project = {
  title: '',
  desc: ''
}

export default (state = project, action = { }) => {

  switch (action.type) {
    case UPDATE_PROJECT:
      return Object.assign({}, state, action.projectData )

    default: return state

  }

}
