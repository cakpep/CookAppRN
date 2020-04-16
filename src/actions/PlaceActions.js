import { ADD_PLACE } from '../constants/ActionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}