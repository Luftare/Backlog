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
      selectedTopic: null,
      selectedEpic: null,
    };

    this.props.backlogActions.fetchEpics();

    this.selectTopic = topic => {
      const selectedTopic = this.props.backlog.topics.find(tpc => tpc === topic);
      this.setState({selectedTopic});
    };

    this.selectEpic = epic => {
      const selectedEpic = this.props.backlog.epics.find(epc => epc === epic);
      this.props.backlogActions.fetchTopics();//TODO: Add argument
      this.setState({selectedEpic});
    };
  }

  render() {
    const {epics, topics} = this.props.backlog;
    return (
      <div className="l-app">
        <div className="header header--accent">Skill backlog</div>
        <div className="l-wrapper">
          <Epics epics={epics} selectedEpic={this.state.selectedEpic} selectEpic={this.selectEpic}></Epics>
          <Topics topics={topics} selectedTopic={this.state.selectedTopic} selectedEpic={this.state.selectedEpic} selectTopic={this.selectTopic}></Topics>
          <Details topic={this.state.selectedTopic}></Details>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        backlog: state.backlogReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
       backlogActions: bindActionCreators(backlogActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Backlog);
