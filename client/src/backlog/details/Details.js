import React from 'react';
import Detail from './Detail';

const Details = ({topic}) => {
  if(!topic) return null;
  return(
    <div className="container container--wide">
      <Detail topic={topic}></Detail>
    </div>
  );
};


export default Details;
