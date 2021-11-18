/*
 * @Description: Refs & DOM
 * @Author: F-Stone
 * @Date: 2021-11-18 15:20:01
 * @LastEditTime: 2021-11-18 15:23:43
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

function CustomTextInput (props) {
    const textInput = React.useRef(null);
    function handleClick() {
        textInput.current.focus();
    }
    return(
        <div>
            <input type="text" name="" id="" ref={textInput} />
            <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
    )
}

ReactDOM.render(<CustomTextInput />, document.getElementById("root"))
