import React from 'react';

const Detail = ({topic}) => {
  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </div>
  );
};

export default Detail;
