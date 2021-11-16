/*
 * @Description: 事件处理
 * @Author: F-Stone
 * @Date: 2021-11-16 14:17:09
 * @LastEditTime: 2021-11-16 14:21:41
 * @LastEditors: F-Stone
 */

import React from 'react'
import ReactDOM from 'react-dom'

class From extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

ReactDOM.render(<From />, document.getElementById("root"));
