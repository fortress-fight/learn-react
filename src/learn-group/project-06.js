/*
 * @Description: 事件处理
 * @Author: F-Stone
 * @Date: 2021-11-16 14:22:13
 * @LastEditTime: 2021-11-16 14:26:28
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDom from 'react-dom';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}

ReactDom.render(<Toggle />, document.getElementById("root"))
