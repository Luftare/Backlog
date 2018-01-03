import React, { Component } from 'react';
import './Backlog.css';
import Details from './details/Details';
import Topics from './topics/Topics';

class Backlog extends Component {
  render() {
    const topics = [
      {name: "CSS", description: "CSS is a styling language for web development.", skill: 3},
      {name: "Java", description: "Java is everywhere. Write once, debug everywhere.", skill: 1}
    ];

    const selectedTopic = topics[0];

    return (
      <div className="wrapper">
        <header>APP NAME</header>
        <Topics topics={topics}></Topics>
        <Details topic={selectedTopic}></Details>
      </div>
    );
  }
}

export default Backlog;
