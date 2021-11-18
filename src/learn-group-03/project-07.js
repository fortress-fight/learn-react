/*
 * @Description: Ref & DOM 回调
 * @Author: F-Stone
 * @Date: 2021-11-18 15:29:31
 * @LastEditTime: 2021-11-18 15:35:54
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class CustomTextInput extends React.Component {
    textInput = null;

    setTextInputRef = el => {
        // 在使用 ref 引用时，当组件挂载后会传入 Node 
        // 当组件卸载时，会传入 Null
        this.textInput = el
    }
    focusTextInput = () => {
        this.textInput && this.textInput.focus()
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {
        return (
            <div>
                <input type="text" name="" id="" ref={this.setTextInputRef} />
                <input type="button" value="Focus this text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}
ReactDOM.render(<CustomTextInput />, document.getElementById("root"));
