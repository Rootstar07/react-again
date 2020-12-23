import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.sub}
      </div>
    );
  }
}

export default Subject;
