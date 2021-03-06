/*
 * @Description:
 * @Author: F-Stone
 * @Date: 2021-11-16 18:41:58
 * @LastEditTime: 2021-11-17 11:03:52
 * @LastEditors: F-Stone
 */
import React from "react";
import ReactDOM from "react-dom";

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? (
            product.name
        ) : (
            <span style={{ color: "red" }}>{product.name}</span>
        );

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (this.props.inStockOnly) {
                if (!product.stocked) return;
            }
            if (
                this.props.filterText &&
                !product.name.includes(this.props.filterText)
            )
                return;
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockOnlyChange = (e) => {
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={this.handleInStockOnlyChange}
                    />{" "}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: "", inStockOnly: false };
    }
    handleFilterTextChange = (filterText) => {
        this.setState({ filterText });
    };
    handleInStockChange = (inStockOnly) => {
        this.setState({ inStockOnly });
    };
    render() {
        return (
            <div>
                <SearchBar
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

const PRODUCTS = [
    {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football",
    },
    {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball",
    },
    {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball",
    },
    {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch",
    },
    {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5",
    },
    {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7",
    },
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById("root")
);
