import React from 'react';
import {ProductQueryGET} from "../service/FetchAPI";
import {connect} from "react-redux";
import {GetProductsAction} from "../actions/GetProductsAction";


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


    render() {
        return <div className="testConnectToServer">
            <button onClick={this.getProducts}>Get All Products</button>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        productsInfo: state.productsInfo
    }
}

export default connect(mapStateToProps)(ProductHandling);