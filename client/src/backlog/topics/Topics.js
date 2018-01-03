import React from "react";
import Topic from './Topic';

const Topics = ({topics}) => {
    return (
      <div className="container container--narrow">
        <ul>
        {topics.map(topic => {
          return <Topic key={topic.name} topic={topic}></Topic>;
        })}
        </ul>
      </div>
    );
};

export default Topics;
