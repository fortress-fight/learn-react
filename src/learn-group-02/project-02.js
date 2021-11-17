/*
 * @Description: Context
 * @Author: F-Stone
 * @Date: 2021-11-17 11:34:11
 * @LastEditTime: 2021-11-17 13:29:01
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

const ThemeContext = React.createContext("light");

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

class ThemeButton extends React.Component{
    static contextType = ThemeContext;
    render() {
        return <button theme={this.context}>按钮</button>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
