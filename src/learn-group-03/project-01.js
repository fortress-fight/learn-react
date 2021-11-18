/*
 * @Description: 性能优化 -- PureComponent
 * @Author: F-Stone
 * @Date: 2021-11-18 10:21:52
 * @LastEditTime: 2021-11-18 10:54:19
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

// React.PureComponent 只通过浅比较判断 state props 是否发生变化来进行判断，示例（如果没有判断出变化，页面将不会发生变化）
class ListOfWords extends React.Component {
    render() {
        return (<div>{this.props.words.join(",")}</div>)
    }
}
class App extends React.PureComponent {
    state = {
        words: ["marklar"]
    }
    handleClick = () => {
        const words = this.state.words
        words.push("marklar");
        this.setState({
            words: words
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>add word</button>
                <ListOfWords words={this.state.words}/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"))
