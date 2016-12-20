export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export function changeMessage(m){
  return {
      type: UPDATE_MESSAGE,
      message: m
  }
};
