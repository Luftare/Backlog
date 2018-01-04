import React from 'react';

const Epic = ({epic, selectEpic, selectedEpic}) => {
  const classes = "category__item " + (selectedEpic && selectedEpic.name === epic.name? "category__item--active" : "");
  return (
    <li className={classes} onClick={e => selectEpic(epic)}>{epic.name}</li>
  );
};

export default Epic;
