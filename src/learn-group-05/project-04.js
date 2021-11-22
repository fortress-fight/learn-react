/*
 * @Description: 为什么我会在我的函数中看到陈旧的 props 和 state ？
 * @Author: F-Stone
 * @Date: 2021-11-22 15:31:43
 * @LastEditTime: 2021-11-22 15:36:23
 * @LastEditors: F-Stone
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Example() {
    const [count, setCount] = useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            alert("You clicked on: " + count);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={handleAlertClick}>Show alert</button>
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById("root"));
