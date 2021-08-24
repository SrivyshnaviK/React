import React, { Component } from "react";
import { StaticRouter as Router, Route } from "react-router-dom";

function RouteStatus(props) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = props.statusCode;
        }
        return <div>{props.children}</div>;
      }}
    />
  );
}

function PrintContext(props) {
  return <p>Static context: {JSON.stringify(props.staticContext)}</p>;
}

export default class StaticRouterExample extends Component {
  staticContext = {};

  render() {
    return (
      <Router location="/foo" context={this.staticContext}>
        <div>
          <RouteStatus statusCode={400}>
            <p>Route with statusCode 400</p>
            <PrintContext staticContext={this.staticContext} />
          </RouteStatus>
        </div>
      </Router>
    );
  }
}
