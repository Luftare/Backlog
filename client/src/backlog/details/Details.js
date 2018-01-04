import React from 'react';
import Detail from './Detail';

const Details = ({topic}) => {
  if(!topic) return null;
  return(
    <div className="l-container l-container--wide">
      <Detail topic={topic}></Detail>
    </div>
  );
};


export default Details;
