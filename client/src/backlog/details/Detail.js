import React, {Component} from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDescription: false,
      currentDescription: props.topic.description,
    };

    this.showEdit = () => {
      this.setState({editDescription: true});
    };

    this.saveDescription = () => {
      this.setState({editDescription: false});
    };

    this.updateDescription = (e) => {
      this.props.updateTopicDescription(this.props.topic, this.textInput.value);
    };
  }

  render() {
    const {topic, updateTopicDescription} = this.props;
    const formattedDescription = topic.description.replace(/\r?\n/g, '<br>');
    return (
      <div className="l-container__article">
        <h3>{topic.name}</h3>
        {
          this.state.editDescription
          ? <textarea
              className="l-container__textarea"
              ref={input => {this.textInput = input;}}
              value={topic.description}
              onChange={this.updateDescription}
              onBlur={this.saveDescription}
            />
          : <p onDoubleClick={this.showEdit} dangerouslySetInnerHTML={{__html: formattedDescription}}></p>
        }
      </div>
    );
  }
};

export default Detail;
