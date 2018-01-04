import React from 'react';

const Epic = ({epic, selectEpic}) => {
  return (
    <li onClick={e => selectEpic(epic)}>{epic.name}</li>
  );
};

export default Epic;
