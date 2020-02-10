import React, { Component } from "react";
import { fetchMainPosts } from "../utils/api";

class TopStories extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    fetchMainPosts("top").then(data => this.setState({ stories: data }));
  }

  render() {
    const { stories } = this.state;
    return (
      <div>
        {stories.map((x, i) => (
          <div>
            <h2>{x.title}</h2>
            <h4>{x.by}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default TopStories;
