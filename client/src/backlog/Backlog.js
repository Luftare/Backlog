import React, { Component } from 'react';
import './Backlog.css';
import Details from './details/Details';
import Topics from './topics/Topics';
import Epics from './epics/Epics';

class Backlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      epics: [
        {name: "Programming"},
        {name: "Sports"},
      ],
      selectedTopic: null,
      selectedEpic: null,
    };

    this.selectTopic = topic => {
      const selectedTopic = this.state.topics.find(tpc => tpc === topic);
      this.setState({selectedTopic});
    };

    this.selectEpic = epic => {
      const selectedEpic = this.state.epics.find(epc => epc === epic);
      if(selectedEpic === this.state.epic || !selectedEpic) return;
      const topics = [
        {name: "CSS", description: "CSS is a styling language for web development.", skill: 3},
        {name: "Java", description: "Java is everywhere. Write once, debug everywhere.", skill: 1}
      ];
      this.setState({selectedEpic, topics});
    };
  }

  render() {
    return (
      <div className="l-app">
        <div className="header header--accent">Skill backlog</div>
        <div className="l-wrapper">
          <Epics epics={this.state.epics} selectedEpic={this.state.selectedEpic} selectEpic={this.selectEpic}></Epics>
          <Topics topics={this.state.topics} selectedTopic={this.state.selectedTopic} selectTopic={this.selectTopic}></Topics>
          <Details topic={this.state.selectedTopic}></Details>
        </div>
      </div>
    );
  }
}

export default Backlog;
