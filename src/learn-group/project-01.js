/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-16 13:13:53
 * @LastEditTime: 2021-11-16 13:14:11
 * @LastEditors: F-Stone
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Harper",
    lastName: "Perez",
}

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

