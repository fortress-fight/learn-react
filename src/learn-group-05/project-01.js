/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-21 23:47:31
 * @LastEditTime: 2021-11-22 13:30:48
 * @LastEditors: F-Stone
 */
import React, { useState, useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom'

function Parent() {
    const [num, setNum] = useState(1);
    const [parentAge, setParentAge] = useState(1);
    // useMemo 表示只当 parentAge 发生变化的时候才会修改 childAge
    const childAge = useMemo(() => {
        console.log("ParentAge Changed")
        return parentAge * 1 / 2 * Math.random();
    }, [parentAge])

    return (
        <div>
            ParentAge: {parentAge}
            Num: {num}
            ChildAge: {childAge}
            <button onClick={() => setParentAge(parentAge + 1)}>ChangeParentAge</button>
            <button onClick={() => setNum(num + 1)}>ChangeNum</button>
            <Child childAge={childAge}></Child>
        </div>
    )
}

function Child(props) {

    useEffect(() => {
        console.log("Child Render")
    }, [props.childAge])

    return (
        <>
            <div>childMessage</div>
            <span>childAge: {props.childAge}</span>
        </>
    )
}

ReactDOM.render(<Parent />, document.getElementById("root"));
