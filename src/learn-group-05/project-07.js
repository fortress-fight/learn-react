/*
 * @Description: 我该如何测量 DOM 节点？
 * @Author: F-Stone
 * @Date: 2021-11-22 16:06:16
 * @LastEditTime: 2021-11-22 16:14:11
 * @LastEditors: F-Stone
 */
import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'

function MeasureExample() {
    const [height, setHeight] = useState(0)

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, [])

    return (
        <React.Fragment>
            <h1 ref={measuredRef}>Hello, world</h1>
            <h2>The above header is {Math.round(height)}px tall</h2>
        </React.Fragment>
    )
}

ReactDOM.render(<MeasureExample />, document.getElementById("root"));
