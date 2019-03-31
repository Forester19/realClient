import React from 'react';
import {ProductQueryGET} from "./FetchAPI";
import {connect} from "react-redux";
import {GetProductsAction} from "../actions/GetProductsAction";
import {OpenFieldsForNewProductAction} from "../actions/OpenFieldsForNewProductAction";


class ProductHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsInfo: []
        };
    }

    getProducts = async () => {
        let listProductsJSON = await ProductQueryGET();
        this.props.dispatch(GetProductsAction(listProductsJSON));
    };
    openFieldsForNewProduct = () => {
        this.props.dispatch(OpenFieldsForNewProductAction(true));
    };


    render() {
        return <div className="testConnectToServer">
            <button onClick={this.getProducts}>Get All Products</button>
            <button onClick={this.openFieldsForNewProduct}>Add New Product</button>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        productsInfo: state.productsInfo
    }
}

export default connect(mapStateToProps)(ProductHandling);