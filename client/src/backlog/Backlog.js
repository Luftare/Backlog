import React, { Component } from 'react';
import './Backlog.css';
import * as backlogActions from '../actions/backlogActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Details from './details/Details';
import Topics from './topics/Topics';
import Epics from './epics/Epics';

class Backlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTopicName: null,
      selectedEpicName: null,
    };

    this.props.backlogActions.fetchEpics();

    this.selectTopic = topic => {
      const selectedTopicName = topic.name;
      this.setState({selectedTopicName});
    };

    this.selectEpic = epic => {
      const selectedEpicName = epic.name;
      this.props.backlogActions.fetchTopics();
      this.setState({selectedEpicName});
    };
  }

  render() {
    const {epics, topics} = this.props;
    const {updateTopicDescription} = this.props.backlogActions;
    const selectedTopic = this.state.selectedTopicName? topics.find(tpc => tpc.name === this.state.selectedTopicName) : null;
    const selectedEpic = this.state.selectedEpicName? epics.find(epc => epc.name === this.state.selectedEpicName) : null;

    return (
      <div className="l-app">
        <div className="header header--accent">Skill backlog</div>
        <div className="l-wrapper">
          <Epics epics={epics} selectedEpic={selectedEpic} selectEpic={this.selectEpic}></Epics>
          <Topics topics={topics} selectedTopic={selectedTopic} selectedEpic={selectedEpic} selectTopic={this.selectTopic}></Topics>
          <Details topic={selectedTopic} updateTopicDescription={updateTopicDescription}></Details>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        topics: state.backlogReducer.topics,
        epics: state.backlogReducer.epics,
    };
}

function mapDispatchToProps(dispatch) {
    return {
       backlogActions: bindActionCreators(backlogActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Backlog);
