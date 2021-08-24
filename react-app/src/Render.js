import React from 'react';
import ReactDOM from 'react-dom';

function Tick() {
    return <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>;

}
setInterval(Tick,1000);
  
export default Tick
