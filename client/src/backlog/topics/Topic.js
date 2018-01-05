import React from 'react';

const Topic = ({topic, selectTopic, selectedTopic, deleteTopic, deleteVisible}) => {
  const classes = "category__item " + (selectedTopic && selectedTopic.name === topic.name? "category__item--active" : "");
  return (
    <li className={classes} onClick={e => selectTopic(topic)}>{deleteVisible? <button onClick={e => deleteTopic(e, topic)}>-</button> : null}{topic.name}</li>
  );
};

export default Topic;
