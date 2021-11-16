/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-16 13:14:42
 * @LastEditTime: 2021-11-16 13:40:53
 * @LastEditors: F-Stone
 */
import ReactDOM from 'react-dom'

function tick() {
    const element = (
        <div>
            <h1>Hello1, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    ReactDOM.render(element, document.getElementById("root"));
}
setInterval(tick, 1000)
