import React from 'react';

const Topic = ({topic, selectTopic, selectedTopic}) => {
  const classes = "category__item " + (selectedTopic && selectedTopic.name === topic.name? "category__item--active" : "");
  return (
    <li className={classes} onClick={e => selectTopic(topic)}>{topic.name}</li>
  );
};

export default Topic;
