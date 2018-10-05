import * as actionTypes from './actionTypes';

// Action Creators (supports Async function)
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = value => {
  return {
    type: actionTypes.ADD,
    value
  };
};

export const subtract = value => {
  return {
    type: actionTypes.SUBTRACT,
    value
  };
};
