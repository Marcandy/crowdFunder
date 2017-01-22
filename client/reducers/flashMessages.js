import {ADD_FLASH_MESSAGE} from '../actions/types';
import shortid from  'shortid'; //auto generate id

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(), // genrate ids
          type: action.message.type,
          text: action.message.text
        }
      ]
    default: return state;

  }
}
