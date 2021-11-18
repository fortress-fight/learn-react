/*
 * @Description: Web Components
 * @Author: F-Stone
 * @Date: 2021-11-18 18:52:43
 * @LastEditTime: 2021-11-18 18:55:19
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('x-search', XSearch);

ReactDOM.render(<x-search name="web-component"></x-search>, document.getElementById("root"))
