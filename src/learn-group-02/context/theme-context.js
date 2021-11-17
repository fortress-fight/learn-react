/*
 * @Description: theme-context
 * @Author: F-Stone
 * @Date: 2021-11-17 13:46:10
 * @LastEditTime: 2021-11-17 13:48:23
 * @LastEditors: F-Stone
 */
import React from 'react';

export const themes = {
    light: {
        foreground: "#000",
        background: "#eee"
    },
    dark: {
        foreground: "#fff",
        background: "#222"
    }
}

export const ThemeContext = React.createContext(themes.dark);
ThemeContext.displayName = "ThemeContext"
