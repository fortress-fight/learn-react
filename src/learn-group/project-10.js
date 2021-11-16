/*
 * @Description: 表单
 * @Author: F-Stone
 * @Date: 2021-11-16 15:27:51
 * @LastEditTime: 2021-11-16 15:58:22
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", taste: "coconut"};
    }    
    handleChange = (key, event) => {
        this.setState({[key]: event.target.value});
    }
    handleSubmit = (event) => {
        alert(
            `
            提交的名字: ${this.state.name} 
            选择你喜欢的风味: ${this.state.taste}
            `
        );
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        名字：
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} />
                    </label>
                </div>
                <div>
                    <label htmlFor="taste">选择你喜欢的风味</label>
                    <select name="taste" id="taste" value={this.state.taste} onChange={this.handleChange.bind(this, 'taste')}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </div>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
