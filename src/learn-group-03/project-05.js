/*
 * @Description: Ref & DOM
 * @Author: F-Stone
 * @Date: 2021-11-18 15:12:07
 * @LastEditTime: 2021-11-18 15:16:35
 * @LastEditors: F-Stone
 */
import React from 'react';
import ReactDOM from 'react-dom';

class CustomTextInput extends React.Component {
    textInput = React.createRef();
    focusTextInput = () => {
        this.textInput.current.focus();
    }
    componentDidMount() {
        this.focusTextInput();
    }
    render() {
        return (
            <div>
                <input type="text" name="" id="" ref={this.textInput} />
                <input type="button" value="Focus this text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}

ReactDOM.render(<CustomTextInput />, document.getElementById("root"))
