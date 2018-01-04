import React, {Component} from "react";
import Topic from './Topic';

class Topics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false
    };

    this.showInput = () => {
      this.setState({inputVisible: true});
    };

    this.submitTopic = () => {

    };

    this.cancelInput = () => {
      this.setState({inputVisible: false});
    };
  }

  render() {
    const {topics, selectTopic, selectedTopic, selectedEpic} = this.props;
    return (
      <div className="l-container l-container--narrow l-container--dark">
        <ul className="category">
        {topics.map(topic => {
          return <Topic key={topic.name} selectedTopic={selectedTopic} selectTopic={selectTopic} topic={topic}></Topic>;
        })}
        </ul>
        {this.state.inputVisible? <input type="text" /> : null}
        {selectedEpic
          ? (
            this.state.inputVisible
              ? <span><button onClick={this.submitTopic}>-></button><button onClick={this.cancelInput}>x</button></span>
              : <button onClick={this.showInput}>+</button>
          )
          : null}
      </div>
    );
  }
};

export default Topics;
