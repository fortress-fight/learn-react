/*
 * @Description: React memo
 * @Author: F-Stone
 * @Date: 2021-11-22 17:31:04
 * @LastEditTime: 2021-11-22 17:54:29
 * @LastEditors: F-Stone
 */
import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

function Child(props) {
    useEffect(() => {
        console.log(props.title + ":" + props.desc);
    });
    return <div>Child Age: {props.num}</div>;
}

function Parent() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    const child1 = useMemo(() => <Child num={num1} title="num1" desc="当 num1 更新的时候 child1 重新渲染" />, [num1]);
    const child2 = useMemo(() => <Child num={num2} title="num2" desc="当 num2 更新的时候 child2 重新渲染"/>, [num2]);
    const child3 = <Child num={num3} title="num3" desc="只要发生修改, 就会 child3 重新渲染" />;

    return (
        <>
            {child1}
            <button onClick={() => setNum1(num1+1)}>Change Num1</button>
            {child2}
            <button onClick={() => setNum2(num2+1)}>Change Num2</button>
            {child3}
            <button onClick={() => setNum3(num3+1)}>Change Num3</button>
        </>
    );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
