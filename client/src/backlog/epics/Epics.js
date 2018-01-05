import React, {Component} from 'react';
import Epic from './Epic';

class Epics extends Component {

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

    this.submitEpic = () => {

    };

    this.deleteEpic = (e, epic) => {
      e.stopPropagation();
      
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
          return <Epic key={epic.name} selectEpic={selectEpic} deleteVisible={this.state.deleteVisible} deleteEpic={this.deleteEpic} selectedEpic={selectedEpic} epic={epic}></Epic>;
        })}
        </ul>
        {this.state.inputVisible? <input type="text" /> : null}
        {this.state.inputVisible
          ? <span><button onClick={this.submitEpic}>-></button><button onClick={this.cancelInput}>x</button></span>
          : <span><button onClick={this.showInput}>+</button><button onClick={this.toggleShowDelete}>-</button></span>
        }

      </div>
    );
  }

};

export default Epics;
