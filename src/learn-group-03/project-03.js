/*
 * @Description: React-Portals 事件传播
 * @Author: F-Stone
 * @Date: 2021-11-18 11:14:28
 * @LastEditTime: 2021-11-18 13:27:09
 * @LastEditors: F-Stone
 */
import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }
    componentDidMount() {
        document.body.appendChild(this.el);
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
class Parent extends React.Component {
    state = {
        clicks: 0,
    };
    handleClick = () => {
        this.setState((state) => ({
            clicks: state.clicks + 1,
        }));
    };
    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools to observe that the button is
                    not a child of the div with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}

function Child() {
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    )
}

ReactDOM.render(<Parent />, document.getElementById("root"));
