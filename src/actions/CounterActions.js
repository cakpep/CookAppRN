import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants/ActionTypes';

export const increment = () => {
  return {
    type: COUNTER_INCREMENT
  }
}

export const decrement = () => {
  return {
    type: COUNTER_DECREMENT
  }
}