/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-17 17:20:45
 * @LastEditTime: 2021-11-17 17:24:41
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        )
    }
}

class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
                <td>Hello</td>
                <td>Word</td>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Table />, document.getElementById("root"));
