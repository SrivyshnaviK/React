import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {

  render() {
    return (
      <div>
        <h1>From FunctionalClock</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function Ticks() {
  return (
    <Clock date={new Date()} />
  );
}
export default Ticks