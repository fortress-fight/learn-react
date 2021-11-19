/*
 * @Description: React Hook -- useContext
 * @Author: F-Stone
 * @Date: 2021-11-19 13:22:43
 * @LastEditTime: 2021-11-19 18:07:36
 * @LastEditors: F-Stone
 */
import React, { useContext } from "react";
import ReactDOM from 'react-dom'

const themes = {
    light: { foreground: "#000", background: "#eee" },
    dark: { foreground: "#fff", background: "#222" },
};

const ThemeContext = React.createContext(themes.light);

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am style by theme context
        </button>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
