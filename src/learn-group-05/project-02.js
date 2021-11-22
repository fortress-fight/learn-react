/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-22 13:25:40
 * @LastEditTime: 2021-11-22 13:42:03
 * @LastEditors: F-Stone
 */
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
    
}

ReactDOM.render(<TextInputWithFocusButton />, document.getElementById("root"));
