/*
 * @Description: react 调用 ajax 使用示例
 * @Author: F-Stone
 * @Date: 2021-11-22 14:25:13
 * @LastEditTime: 2021-11-22 14:33:00
 * @LastEditors: F-Stone
 */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function SearchResults() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState("react");

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios(
                "https://hn.algolia.com/api/v1/search?query=" + query
            );
            if (!ignore) setData(result.data);
        }

        fetchData();
        return () => {
            ignore = true;
        };
    }, [query]);

    return (
        <React.Fragment>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {data.hits.map((item) => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

ReactDOM.render(<SearchResults />, document.getElementById("root"));
