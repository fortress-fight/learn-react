/*
 * @Description: Hook -- Effect Hook
 * @Author: F-Stone
 * @Date: 2021-11-19 13:17:50
 * @LastEditTime: 2021-11-19 13:55:01
 * @LastEditors: F-Stone
 */

import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function Example() {
    const [count, setCount] = useState(0);
    
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}

ReactDOM.render(<Example />, document.getElementById("root"))
