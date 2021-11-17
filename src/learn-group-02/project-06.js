/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-17 14:43:06
 * @LastEditTime: 2021-11-17 15:56:16
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateForComponent(error) {
        console.log(error);
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

class MyComponent extends React.Component {
    // componentDidMount() {
    // }
    state = {
        num: 0,
    }
    randomState = () => {
        this.setState({num: Math.random()});
    }
    render() {
        if (this.state.num >= 0.5) {
            throw new Error("模拟一个错误")
        }
        return (
            <button onClick={this.randomState}>随机数字</button>
        )
    }
}

function App () {
    return (
        <div>
            <div>测试</div>
            <ErrorBoundary>
                <MyComponent />
            </ErrorBoundary>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
