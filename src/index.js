import ReactDOM from "react-dom";
import React, { Component } from "react";
import Hello from "./Hello";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
  }

  callfunchandler = () => {
    var item = "sampletext";
    var myarry = this.state.list.slice();
    myarry.push(item);
    this.setState({ list: myarry, text: "testvariable" });
  };

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <Hello name="krishna" />
        <button onClick={this.callfunchandler}>SET STATE </button>
        <p>{this.state.list}</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
