/*
 * @Description: Render Props
 * @Author: F-Stone
 * @Date: 2021-11-18 15:44:05
 * @LastEditTime: 2021-11-18 18:19:12
 * @LastEditors: F-Stone
 */
import React from "react";
import ReactDOM from "react-dom";

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div>
                <p>Cat 的位置是（{mouse.x}, {mouse.y}）</p>
            </div>
        )
    }
}

class Mouse extends React.Component {
    state = {x: 0, y: 0};
    handleMouseMove = (ev) => {
        this.setState({ x: ev.clientX, y: ev.clientY });
    };
    componentDidMount() {
        document.body.onmousemove = this.handleMouseMove;
    }
    render() {
        return (
            <React.Fragment>
                {this.props.render(this.state)}
            </React.Fragment>
        )
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div style={{ height: "100vh" }}>
                <h1>移动鼠标</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

ReactDOM.render(<MouseTracker />, document.getElementById("root"));
