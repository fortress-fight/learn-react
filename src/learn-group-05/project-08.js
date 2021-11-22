/*
 * @Description: 我该如何测量 DOM 节点？
 * @Author: F-Stone
 * @Date: 2021-11-22 16:20:31
 * @LastEditTime: 2021-11-22 16:27:48
 * @LastEditors: F-Stone
 */
import React, { useState, useCallback} from 'react'
import ReactDOM from 'react-dom'

function MeasureExample() {
    const [rect, ref] = useClientRect();
    return (
        <>
            <h1 ref={ref}>Hello, world!</h1>
            {
                rect !== null && <h2>The above header is {Math.round(rect.height)}px tall</h2>
            }
        </>
    )
}

function useClientRect() {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);
    return [rect, ref];
}

ReactDOM.render(<MeasureExample />, document.getElementById("root"));
