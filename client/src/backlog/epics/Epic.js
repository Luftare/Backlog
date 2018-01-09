import React from 'react';

const Epic = ({epic, selectEpic, selectedEpic, deleteVisible, deleteEpic}) => {
  const classes = "category__item " + (selectedEpic && selectedEpic.name === epic.name? "category__item--active" : "");
  return (
    <li
      className={classes}
      onClick={e => selectEpic(epic)}>
        {deleteVisible? <button className="category__button" onClick={e => deleteEpic(e, epic)}>-</button> : null}
        <span className="category__item-content">{epic.name}</span>
    </li>
  );
};

export default Epic;
