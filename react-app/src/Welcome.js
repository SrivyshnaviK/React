import React from 'react';
import ReactDOM from 'react-dom';
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
function Names() {
    return (
        <div>
          <Welcome name="Sara" />      <Welcome name="Cahal" />      <Welcome name="Edite" />    </div>
      );
}
export default Names;