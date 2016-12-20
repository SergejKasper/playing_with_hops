/*dataFlow*/
import {UPDATE_MESSAGE} from '../actions/message'

export default function messageReducer(state = {}, action) {
 return (action.type !== UPDATE_MESSAGE) ? state : { ...state, message: action.message }
}
