export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export function changeMessage(message){
  return {
      type: UPDATE_MESSAGE,
      message: message
  }
};
