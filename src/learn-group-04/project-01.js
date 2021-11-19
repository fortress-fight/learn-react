/*
 * @Description: Hook 简介
 * @Author: F-Stone
 * @Date: 2021-11-19 11:32:06
 * @LastEditTime: 2021-11-19 13:08:57
 * @LastEditors: F-Stone
 */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Example () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

ReactDOM.render(<Example />, document.getElementById("root"))
