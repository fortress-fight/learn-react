/*
 * @Description: React Hook -- reducer
 * @Author: F-Stone
 * @Date: 2021-11-19 18:18:14
 * @LastEditTime: 2021-11-19 18:28:36
 * @LastEditors: F-Stone
 */
import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default:
            throw new Error()
    }
}

function Count() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    )
}

ReactDOM.render(<Count />, document.getElementById("root"));
