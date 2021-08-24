import React from 'react';
function FormattedDate(props) {
    return <h2>It is Formatted Date {props.date.toLocaleTimeString()}</h2>;
  }
class Clock extends React.Component {
    constructor(props) { super(props); this.state = { date: new Date() }; }
    componentDidMount() {
        this.timerID = setInterval(  //this.state can add new properties then and there 
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID); 
    }
    tick() {
        this.setState({
            date: new Date()  // every time browser updates setState method is called and mouting is done 
        });
    }
    render() {
        return (
            <div>
                <h1>From Class Clock</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>     
                <div><FormattedDate date={this.state.date}/></div> </div>
        );
    }
}
export default Clock