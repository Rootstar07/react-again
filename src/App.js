import { Component } from "react";
import "./App.css";
import Subject from "./Subject.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "WorldWideWeb" },
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
      </div>
    );
  }
}

export default App;
