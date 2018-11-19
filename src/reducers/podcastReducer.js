import {
  GET_EPISODES
} from '../actions'

const initialState = {
  episodes: [],
  loading: true
}

export default function podcastReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
