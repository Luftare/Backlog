import React from "react";
import Topic from './Topic';

const Topics = ({topics, selectTopic}) => {
    return (
      <div className="container container--narrow">
        <ul>
        {topics.map(topic => {
          return <Topic key={topic.name} selectTopic={selectTopic} topic={topic}></Topic>;
        })}
        </ul>
      </div>
    );
};

export default Topics;
