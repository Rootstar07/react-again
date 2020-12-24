import { Component } from "react";
import "./App.css";
import Subject from "./Subject.js";
import Toc from "./Toc.js";

class App extends Component {
  constructor(props) {
    //초기화
    super(props); //this 초기화
    this.state = {
      subject: { title: "Web", sub: "WorldWideWeb" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JavaScript", desc: "JavaSCript is for interactive" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <Toc data={this.state.subject.contnets}></Toc>
      </div>
    );
  }
}

export default App;
