/*
 * @Description: React memo
 * @Author: F-Stone
 * @Date: 2021-11-22 16:58:42
 * @LastEditTime: 2021-11-22 17:28:03
 * @LastEditors: F-Stone
 */
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function Child(props) {
    useEffect(() => {
        console.log(props.title + "Render")
    });
    return (
        <div>
            Child Age: {props.num}
        </div>
    )
}

const MemoChild = React.memo(Child);

function Parent(props) {
    const {render: Component, title} = props;
    const [parentAge, setParentAge] = useState(1);
    const [num, setNum] = useState(0);
    return (
        <div>
            ParentAge: {parentAge}
            Num: {num}
            <button onClick={() => setParentAge(parentAge + 1)}>
                Change Parent Age
            </button>
            <button onClick={() => setNum(num + 1)}>
                Change Number
            </button>
            <Component num={num} title={title}></Component>
        </div>
    )
}

const MemoParent = React.memo(Parent);

function App() {
    return (
        <div>
            <h2>MemoChild</h2>
            <MemoParent render={MemoChild} title="MemoChild"></MemoParent>
            <h2>Child</h2>
            <MemoParent render={Child} title="Child"></MemoParent>
        </div>
    )
}

const MemoApp = React.memo(App);

ReactDOM.render(<MemoApp />, document.getElementById("root"));
