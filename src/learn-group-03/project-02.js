/*
 * @Description: react-Portals
 * @Author: F-Stone
 * @Date: 2021-11-18 11:01:46
 * @LastEditTime: 2021-11-18 11:10:08
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

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
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class App extends React.Component {
    state = {
        showModal: false
    }
    handleShow = () => {
        this.setState({showModal: true})
    }
    handleHide = () => {
        this.setState({showModal: false})
    }
    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div>
                        With a portal, we can render content into a different part of the DOM, as if it were any other React child.
                    </div>
                    This is being rendered inside the #modal-container div.
                    <button onClick={this.handleHide}>
                        Hide modal
                    </button>
                </div>
            </Modal>
        ) : null;
        return (
            <div className="app">
                This div had overflow: hidden.
                <button onClick={this.handleShow}>Show Modal</button>
                {modal}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
