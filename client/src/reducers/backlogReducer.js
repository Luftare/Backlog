import initialState from './initialState';
import {
  FETCH_EPICS,
  FETCH_TOPICS,
  RECEIVE_EPICS,
  RECEIVE_TOPICS,
  UPDATE_TOPIC_DESCRIPTION
} from '../actions/allActions';

export default function backlogReducer(state = initialState.backlog, action) {
  switch (action.type) {
    case FETCH_EPICS:
      return action;
    case FETCH_TOPICS:
      return action;
    case RECEIVE_EPICS:
      return {...state, epics: action.epics};
    case RECEIVE_TOPICS:
      return {...state, topics: action.topics};
    case UPDATE_TOPIC_DESCRIPTION:
      return {...state, topics: state.topics.map(topic => (
        topic.name === action.topic.name
          ? {...topic, description: action.newDescription}
          : topic
      ))};
    default:
      return state;
  }
}
