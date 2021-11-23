/*
 * @Description: dangerouslySetInnerHTML 
 * @Author: F-Stone
 * @Date: 2021-11-23 10:24:20
 * @LastEditTime: 2021-11-23 10:26:45
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'


function App() {
    return (
        <div dangerouslySetInnerHTML={{__html: "<span>test innerHTML</span>"}}></div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
