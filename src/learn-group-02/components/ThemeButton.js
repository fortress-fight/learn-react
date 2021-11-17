
import React from 'react'

import {ThemeContext} from "../context/theme-context";

export default class ThemeButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        let props=this.props;
        let theme = this.context;
        return (
            <button {...props} style={{backgroundColor: theme.background}}/>
        )
    }
}
