/*
 * @Description: 代码分割 - lazy
 * @Author: F-Stone
 * @Date: 2021-11-17 10:57:48
 * @LastEditTime: 2021-11-17 11:33:13
 * @LastEditors: F-Stone
 */

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const LazyComponent = React.lazy(() => import(/* webpackChunkName: "LazyComponent" */ "./components/lazy-component"));

function MyComponent () {
    return (
        <div className="my-component">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    )
}

ReactDOM.render(MyComponent(), document.getElementById("root"));
