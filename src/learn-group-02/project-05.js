/*
 * @Description: 使用多个 Context
 * @Author: F-Stone
 * @Date: 2021-11-17 14:25:25
 * @LastEditTime: 2021-11-17 14:37:07
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

const ThemeContext = React.createContext("light");
const UserContext = React.createContext({
    name: "Guest"
})

class App extends React.Component {
    render() {
        const {singleUser, theme} = this.props;

        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={singleUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}
function Layout(){
    return (
        <div>
            <Content />
        </div>
    )
}

function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <div>
                            <div>用户：{user.name}</div>
                            <div>主题：{theme}</div>
                        </div>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
}

ReactDOM.render(<App theme="black" singleUser={{name: "Mater"}} />, document.getElementById("root"))
