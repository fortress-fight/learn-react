/*
 * @Description: React Hook -- useCallback
 * @Author: F-Stone
 * @Date: 2021-11-19 19:07:57
 * @LastEditTime: 2021-11-19 19:55:59
 * @LastEditors: F-Stone
 */
import React, {useCallback, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


function Parent() {
    const [num, setNum] = useState(1);
    const [age, setAge] = useState(1);
    const getDoubleNum = useCallback(
        () => {
            console.log("changeNumRunning");
            return age + (Math.random()*10).toFixed(0);
        }, 
        [age]
    )
    // const getDoubleNum = () => {
    //     console.log("changeNumRunning");
    //     return age + (Math.random()*10).toFixed(0);
    // }
    return (
        <div>
            Age: {age}
            Num: {num}
            DoubleNum: {getDoubleNum()}
            <button onClick={() => setAge(age+1)}>ChangeAge</button>
            <button onClick={() => setNum(num+1)}>ChangeNum</button>
            <Child callback={getDoubleNum}></Child>
        </div>
    )
}

function Child (props) {

    useEffect(() => {
        console.log("Child Render")
    }, [props.callback])

    return (
        <button onClick={props.callback}>DoubleNum</button>
    )
}

ReactDOM.render(<Parent />, document.getElementById("root"));
