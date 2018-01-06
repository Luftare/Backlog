import * as allActions from './allActions';

export function receiveEpics(epics) {
  return {type: allActions.RECEIVE_EPICS, epics};
}

export function receiveTopics(topics) {
  return {type: allActions.RECEIVE_TOPICS, topics};
}

export function fetchEpics() {
  return (dispatch) => {
    dispatch(receiveEpics([
      {name: "Programming"},
      {name: "Sports"},
    ]))
  };
}

export function fetchTopics() {
  return (dispatch) => {
    dispatch(receiveTopics([
      {name: "CSS", description: "CSS is a styling language for web."},
      {name: "Java", description: "Java is a widespread programming language."},
    ]))
  };
}

export function updateTopicDescription(topic, newDescription) {
  return {type: allActions.UPDATE_TOPIC_DESCRIPTION, topic, newDescription};
}
