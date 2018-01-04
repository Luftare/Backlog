import React, {Component} from 'react';
import Epic from './Epic';

class Epics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false
    };

    this.showInput = () => {
      this.setState({inputVisible: true});
    };

    this.submitEpic = () => {

    };

    this.cancelInput = () => {
      this.setState({inputVisible: false});
    };
  }

  render() {
    const {epics, selectEpic, selectedEpic} = this.props;
    return (
      <div className="l-container l-container--narrow l-container--accent">
        <ul className="category">
        {epics.map(epic => {
          return <Epic key={epic.name} selectEpic={selectEpic} selectedEpic={selectedEpic} epic={epic}></Epic>;
        })}
        </ul>
        {this.state.inputVisible? <input type="text" /> : null}
        {this.state.inputVisible
          ? <span><button onClick={this.submitEpic}>-></button><button onClick={this.cancelInput}>x</button></span>
          : <button onClick={this.showInput}>+</button>
        }

      </div>
    );
  }

};

export default Epics;
