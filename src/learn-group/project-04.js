/*
 * @Description: State & 生命周期
 * @Author: F-Stone
 * @Date: 2021-11-16 13:55:20
 * @LastEditTime: 2021-11-16 14:08:26
 * @LastEditors: F-Stone
 */

import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID  = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        // setState 可以通知 react state 已经改变，
        // 然后重新调用 render()
        // setState 可以传入函数或者对象
        this.setState({date: new Date()})
    }
    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("root")
)
