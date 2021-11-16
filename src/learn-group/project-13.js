/*
 * @Description: 组合 vs 继承
 * @Author: F-Stone
 * @Date: 2021-11-16 18:09:52
 * @LastEditTime: 2021-11-16 18:27:08
 * @LastEditors: F-Stone
 */
import ReactDOM from 'react-dom'

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

ReactDOM.render(WelcomeDialog(), document.getElementById("root"));
