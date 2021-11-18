/*
 * @Description: Ref & DOM 组件之前传递
 * @Author: F-Stone
 * @Date: 2021-11-18 15:35:50
 * @LastEditTime: 2021-11-18 15:43:29
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

function CustomTextInput(props) {
    return (
        <div>
            <input type="text" ref={props.inputRef} />
        </div>
    )
}

class Parent extends React.Component {
    inputElement = null;    
    componentDidMount() {
        this.inputElement && this.inputElement.focus();
    }
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el} />
        )
    }
}

ReactDOM.render(<Parent />, document.getElementById("root"))
