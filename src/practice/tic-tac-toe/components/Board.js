/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2021-11-23 11:34:24
 * @LastEditTime: 2021-11-23 14:27:17
 * @LastEditors: F-Stone
 */
import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
    getBorderRow(start, end, colLen) {
        return Array(end - start + 1)
            .fill(null)
            .map((v, i) => (
                <div className="board-row" key={i}>
                    {Array(colLen)
                        .fill(null)
                        .map((v, j) => this.renderSquare(i * colLen + j))}
                </div>
            ));
    }

    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                {this.getBorderRow(0, 2, 3)}
            </div>
        );
    }
}
