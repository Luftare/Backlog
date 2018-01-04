import React, { Component } from 'react';
import './Backlog.css';
import Details from './details/Details';
import Topics from './topics/Topics';

class Backlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {name: "CSS", description: "CSS is a styling language for web development.", skill: 3},
        {name: "Java", description: "Java is everywhere. Write once, debug everywhere.", skill: 1}
      ],
      selectedTopic: null,
    };

    this.selectTopic = topic => {
      const selectedTopic = this.state.topics.find(tpc => tpc === topic)
      this.setState({selectedTopic});
    };
  }



  render() {
    return (
      <div className="wrapper">
        <header>APP NAME</header>
        <Topics topics={this.state.topics} selectTopic={this.selectTopic}></Topics>
        <Details topic={this.state.selectedTopic}></Details>
      </div>
    );
  }
}

export default Backlog;
