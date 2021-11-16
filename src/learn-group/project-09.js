/*
 * @Description: 列表 & Key
 * @Author: F-Stone
 * @Date: 2021-11-16 14:58:48
 * @LastEditTime: 2021-11-16 15:25:53
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class NumberList extends React.Component {
    render () {
        return <ul>{this.props.numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        )}</ul>;
    }
}

const numbers= [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
  );
