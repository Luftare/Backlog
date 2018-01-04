import React from 'react';

const Detail = ({topic}) => {
  return (
    <div className="l-container__article">
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </div>
  );
};

export default Detail;
