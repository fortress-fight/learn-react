/*
 * @Description: 事件处理--传参
 * @Author: F-Stone
 * @Date: 2021-11-16 14:35:15
 * @LastEditTime: 2021-11-16 14:41:10
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class DelRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            removeId: -1
        }
    }
    deleteRow(id, e) {
        this.setState({
            removeId: id
        })
    }
    render() {
        return <button onClick={this.deleteRow.bind(this, 1)}>Delete Row{this.state.removeId >= "0" ? "-"+this.state.removeId : ""}</button>
    }
}

ReactDOM.render(<DelRow />, document.getElementById("root"))
