/*
 * @Description: 条件渲染
 * @Author: F-Stone
 * @Date: 2021-11-16 14:42:48
 * @LastEditTime: 2021-11-16 14:57:59
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class WarningBanner extends React.Component {
    render() {
        if (!this.props.warn) {
            return null;
        }
    
        return (
            <div className="warning">Warning!</div>
        )
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
ReactDOM.render(<Page />, document.getElementById("root"));
