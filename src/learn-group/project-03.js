/*
 * @Description: 组件 & Props
 * @Author: F-Stone
 * @Date: 2021-11-16 13:43:26
 * @LastEditTime: 2021-11-16 13:51:45
 * @LastEditors: F-Stone
 */

import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from "./components/Welcome";

const element = (
    <div>
        <Welcome name="Sara"/>
        <Welcome name="Cahal"/>
        <Welcome name="Edite"/>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
