import React from "react";
import Topic from './Topic';

const Topics = ({topics, selectTopic, selectedTopic}) => {
    return (
      <div className="l-container l-container--narrow l-container--dark">
        <ul className="category">
        {topics.map(topic => {
          return <Topic key={topic.name} selectedTopic={selectedTopic} selectTopic={selectTopic} topic={topic}></Topic>;
        })}
        </ul>
      </div>
    );
};

export default Topics;
