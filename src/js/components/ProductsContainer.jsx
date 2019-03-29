import React from 'react';
import {connect} from "react-redux";

class ProductsComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productsInfo:[]
        };
    }

    render() {
        const listProducts = (this.props.productsInfo.productsInfo || []).map((d) => <tr>
            <th scope="col">{d.id}</th>
            <th scope="col">{d.title}</th>
            <th scope="col">{d.description}</th>
            <th scope="col">{d.price}</th>
        </tr>);
        return <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            {listProducts}
            </tbody>
        </table>
    }


}
function mapStateToProps(state) {
    return {
        productsInfo: state.productsInfo
    }
}

export default connect(mapStateToProps)(ProductsComponent)

