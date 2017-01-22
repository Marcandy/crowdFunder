import { ADD_FLASH_MESSAGE } from './types';

export function addFlashMessage(message) {// action creator
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}
