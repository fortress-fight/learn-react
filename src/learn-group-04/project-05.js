/*
 * @Description: React Hook -- 惰性初始化
 * @Author: F-Stone
 * @Date: 2021-11-19 18:44:18
 * @LastEditTime: 2021-11-19 19:01:26
 * @LastEditors: F-Stone
 */
import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'

function init (initialCount) {
    return {count: initialCount}
}

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: "reset", payload: initialCount})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type:"increment"})}>+</button>
        </>
    )
}

ReactDOM.render(<Counter initialCount={1} />, document.getElementById("root"))
