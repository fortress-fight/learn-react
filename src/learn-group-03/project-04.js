/*
 * @Description: Profiler API
 * @Author: F-Stone
 * @Date: 2021-11-18 13:28:48
 * @LastEditTime: 2021-11-18 13:39:32
 * @LastEditors: F-Stone
 */
import React, { Profiler } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    callback = (
        id, // 发生提交的 Profiler 树的 “id”
        phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration, // 本次更新 committed 花费的渲染时间
        baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        startTime, // 本次更新中 React 开始渲染的时间
        commitTime, // 本次更新中 React committed 的时间
        interactions // 属于本次更新的 interactions 的集合
    ) => {
        console.log("id:", id);
        console.log("phase:", phase);
        console.log("actualDuration:", actualDuration);
        console.log("baseDuration:", baseDuration);
        console.log("startTime:", startTime);
        console.log("commitTime:", commitTime);
        console.log("interactions:", interactions);
    };
    render() {
        return (
            <div id="APP">
                <Profiler id="test-list" onRender={this.callback}>
                    <List id="list" />
                </Profiler>
            </div>
        );
    }
}

function List() {
    let renderArr = [];
    for (let i = 0; i < 1000; i++) {
        renderArr.push(<div key={i}>{i}</div>);
    }
    return renderArr;
}

ReactDOM.render(<App />, document.getElementById("root"));
