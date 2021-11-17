/*
 * @Description: 在嵌套组件中更新 context
 * @Author: F-Stone
 * @Date: 2021-11-17 14:12:23
 * @LastEditTime: 2021-11-17 14:24:13
 * @LastEditors: F-Stone
 */

// 目的：
// 从内部更新 context
import React from "react";
import ReactDOM from "react-dom";

import { themes } from "./context/theme-context";

const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background }}
                >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }
    toggleTheme = () => {
        this.setState((state) => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark,
        }));
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        )
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
