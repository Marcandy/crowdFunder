import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from '../actions/types';
import shortid from  'shortid'; //auto generate id
import findIndex from 'lodash/findIndex';

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
      break;

    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, {id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
        break;

    default: return state;

  }
}
