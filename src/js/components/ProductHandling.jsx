import React from 'react';
import {ProductQueryGET} from "../service/FetchAPI";
import {connect} from "react-redux";


class ProductHandling extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            productsInfo: []
        };
        console.log('ProductHandlingContainer ' + JSON.stringify(this.state));

    }

    setProducts = () => {
        let listProductsJSON = ProductQueryGET();
        console.log('setProducts ' + JSON.stringify(listProductsJSON));
        this.setState({productsInfo: listProductsJSON});
    };

    render() {
        return <div className="testConnectToServer">
            <button onClick={this.setProducts}>Get All Products</button>
        </div>
    }
}


export default connect()(ProductHandling);