import React, { Component } from "react";

class Test extends Component {
  // Runs when the component is loaded. Put AJAX calls in here.
  componentDidMount() {
    console.log("component did mount");
  }
  //   // Runs before it's mounted
  //   componentWillMount() {
  //     console.log("component will mount");
  //   }
  //   // Runs when component updates (state changed, etc.)
  //   componentDidUpdate() {
  //     console.log("component did update");
  //   }
  //   // Runs when component updates (state changed, etc.)
  //   componentWillUpdate() {
  //     console.log("component will update");
  //   }
  //   // When component receives new properties, this will run. Usually used with Redux.
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("component will receive props");
  //   }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
