import * as React from "react";
import {connect} from "react-redux";
import {ProductQueryGET, ProductQueryPOST} from "../service/FetchAPI";
import {OpenFieldsForNewProductAction} from "../actions/OpenFieldsForNewProductAction";
import {GetProductsAction} from "../actions/GetProductsAction";

class NewProductFieldsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            title: '',
            description: '',
            price: ''
        };
    }

    handle = () => {
        if (this.props.openFields === true) {
            return <div>
                <form onSubmit={this.submitProduct}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter title" value={this.state.title} onChange={this.setTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                               placeholder="Enter Description"
                               value={this.state.description} onChange={this.setDescription}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Price</label>
                        <input type="number" className="form-control" id="exampleInputPassword2"
                               placeholder="Enter price"
                               value={this.state.price} onChange={this.setPrice}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={this.fieldsValidation()}>Submit</button>
                </form>
            </div>;
        } else {
            return ""
        }

    };

    render() {
        return <div>
            {this.handle()}
        </div>
    }

    submitProduct = async (event) => {
        event.preventDefault();
        let resultProduct = this.state;
        await ProductQueryPOST(resultProduct);
        let listProductsJSON = await ProductQueryGET();
        this.props.dispatch(GetProductsAction(listProductsJSON));
        this.props.dispatch(OpenFieldsForNewProductAction(false));
        return false;
    };

    fieldsValidation = () => {
        return !(this.state.title !== '' && this.state.description !== '' && this.state.price !== '');
    };

    setTitle = (event) => {
        this.setState({title: event.target.value});
    };
    setDescription = (event) => {
        this.setState({description: event.target.value});
    };
    setPrice = (event) => {
        this.setState({price: event.target.value});
    };

}

function mapStateToProps(state) {
    return {
        openFields: state.openFieldsForNewProduct
    };

}

export default connect(mapStateToProps)(NewProductFieldsComponent);