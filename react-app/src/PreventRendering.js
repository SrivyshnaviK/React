import React from 'react';
function WarningBanner(props) {
    if (!props.warn) { return null; }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}
function view() {
    if (this.state.showWarning)
        return 'Hide';
    else
        return 'Show';
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.view=this.view.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    view() {
        if (this.state.showWarning)
            return 'Hide';
        else
            return 'Show';
    }
    render() {
        
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />        <button onClick={this.handleToggleClick}>
                    {/* {this.state.showWarning ? 'Hide' : 'Show'} */
                        this.view()
                    }
                </button>
            </div>
        );
    }
}

export default Page