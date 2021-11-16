/*
 * @Description: welcome 组件
 * @Author: F-Stone
 * @Date: 2021-11-16 13:41:45
 * @LastEditTime: 2021-11-16 13:47:23
 * @LastEditors: F-Stone
 */

import React from 'react'

export default class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>
    }
}
