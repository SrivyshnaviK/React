import React from 'react';
import ReactDOM from 'react-dom';
// class LoggingButton extends React.Component {
//     handleClick() {
//         console.log('this is:', this);
//     }

//     render() {
//         // This syntax ensures `this` is bound within handleClick   
//         return (<button onClick={() => this.handleClick()}>
//             <h3>Click me</h3>
//         </button>
//         );
//     }
// }
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.  // Warning: this is *experimental* syntax.  // binding
    handleClick = () => { console.log('this is:', this); }
    render() {
        return (
            <button onClick={this.handleClick}>   
                <h3>Click me</h3>
            </button>
        );
    }
}
export default LoggingButton