import React, { Component } from "react";

class Toc extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      list.push(
        <li>
          <a href="1.Html">HTML</a>
        </li>
      );
      i++;
    }
    return (
      <nav>
        <ul>
          <li>
            <a href="1.Html">HTML</a>
          </li>
          <li>
            <a href="2.CSS">CSS</a>
          </li>
          <li>
            <a href="3.JavaScript">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toc;
