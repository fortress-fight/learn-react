/*
 * @Description: 状态提升
 * @Author: F-Stone
 * @Date: 2021-11-16 16:00:30
 * @LastEditTime: 2021-11-16 16:04:34
 * @LastEditors: F-Stone
 */

import React from 'react'
import ReactDOM from 'react-dom'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
    }
    handleChange = (e) => {
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperature= this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}
ReactDOM.render(<Calculator />, document.getElementById("root"));
