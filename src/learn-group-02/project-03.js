/*
 * @Description: 动态 Context
 * @Author: F-Stone
 * @Date: 2021-11-17 13:45:32
 * @LastEditTime: 2021-11-17 13:58:04
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {ThemeContext, themes} from "./context/theme-context";
import ThemeButton from "./components/ThemeButton";

function Toolbar(props) {
    return (
        <ThemeButton onClick={props.changeTheme}>
            Change Theme
        </ThemeButton>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        }
    }
    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }))
    }    
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemeButton />
                </section>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
