import React from 'react';
import Epic from './Epic';

const Epics = ({epics, selectEpic, selectedEpic}) => {
  return (
    <div className="l-container l-container--narrow l-container--accent">
      <ul className="category">
      {epics.map(epic => {
        return <Epic key={epic.name} selectEpic={selectEpic} selectedEpic={selectedEpic} epic={epic}></Epic>;
      })}
      </ul>
    </div>
  );
};

export default Epics;