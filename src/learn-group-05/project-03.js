/*
 * @Description: React Hook -- useImperativeHandle
 * @Author: F-Stone
 * @Date: 2021-11-22 13:46:11
 * @LastEditTime: 2021-11-22 14:05:23
 * @LastEditors: F-Stone
 */
import React, { useImperativeHandle, useRef } from 'react'
import ReactDOM from 'react-dom'


const FancyInput = React.forwardRef((props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(
        ref,
        () => ({
            test:() => {
                alert(1)
            },
            focus:() => {
                inputRef.current.focus();
            }
        }),
    )
    return (<input type="text" ref={inputRef} />)
})

function TextInputWithFocusButton(props) {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        console.log('inputEl.current:', inputEl.current)
        inputEl.current.focus();
    };

    return (
        <div>
            <FancyInput type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
    
}

ReactDOM.render(<TextInputWithFocusButton />, document.getElementById("root"));
