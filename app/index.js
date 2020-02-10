import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import TopStories from "./components/TopStories";

class App extends React.Component {
  render() {
    return (
      <div>
        <TopStories />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
