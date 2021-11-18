/*
 * @Description: 受控组件 - defaultValue
 * @Author: F-Stone
 * @Date: 2021-11-18 18:59:09
 * @LastEditTime: 2021-11-18 19:15:13
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class NameForm extends React.Component {
    input = React.createRef();
    handleSubmit = (ev) => {
        alert('A name was submitted: ' + this.input.current.value);
        ev.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input defaultValue="Nike" type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
ReactDOM.render(<NameForm />, document.getElementById("root"));
