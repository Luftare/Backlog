import React from 'react';
import Detail from './Detail';

const Details = ({topic, updateTopicDescription}) => {
  if(!topic) return null;
  return(
    <div className="l-container l-container--wide l-container--bright">
      <Detail topic={topic} updateTopicDescription={updateTopicDescription}></Detail>
    </div>
  );
};

export default Details;
