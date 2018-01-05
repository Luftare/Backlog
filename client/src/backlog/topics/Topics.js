import React, {Component} from "react";
import Topic from './Topic';

class Topics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      deleteVisible: false,
    };

    this.showInput = () => {
      this.setState({inputVisible: true});
    };

    this.toggleShowDelete = () => {
      this.setState({deleteVisible: !this.state.deleteVisible});
    }

    this.submitTopic = () => {

    };

    this.deleteTopic = (e, epic) => {
      e.stopPropagation();

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
          return <Topic key={topic.name} selectedTopic={selectedTopic} deleteTopic={this.deleteTopic} deleteVisible={this.state.deleteVisible} selectTopic={selectTopic} topic={topic}></Topic>;
        })}
        </ul>
        {this.state.inputVisible? <input type="text" /> : null}
        {selectedEpic
          ? (
            this.state.inputVisible
              ? <span><button onClick={this.submitTopic}>-></button><button onClick={this.cancelInput}>x</button></span>
              : <span><button onClick={this.showInput}>+</button><button onClick={this.toggleShowDelete}>-</button></span>
          )
          : null}
      </div>
    );
  }
};

export default Topics;
