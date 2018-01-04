import React from 'react';

const Topic = ({topic, selectTopic}) => {
  return (
    <li onClick={e => selectTopic(topic)}>{topic.name}</li>
  );
};

export default Topic;
