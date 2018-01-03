import React, { Component } from 'react';
import './Backlog.css';
import Details from './details/Details';
import Topics from './topics/Topics';

class Backlog extends Component {
  render() {
    return (
      <div className="">
        <header>Skill backlog</header>
        <Topics></Topics>
        <Details></Details>
      </div>
    );
  }
}

export default Backlog;
