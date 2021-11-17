/*
 * @Description: Ref
 * @Author: F-Stone
 * @Date: 2021-11-17 16:58:59
 * @LastEditTime: 2021-11-17 16:59:03
 * @LastEditors: F-Stone
 */
import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    handleClick() {
        // 使用原生的 DOM API 获取焦点
        this.myRef.current.focus();
    }
    render() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <>
                <input type="text" ref={this.myRef} />
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick.bind(this)}
                />
            </>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
