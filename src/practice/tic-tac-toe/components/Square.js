/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2021-11-23 11:34:18
 * @LastEditTime: 2021-11-23 13:49:37
 * @LastEditors: F-Stone
 */

import React from "react";

export default function Square (props)  {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
