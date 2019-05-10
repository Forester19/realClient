import React from 'react';
import {Route, Switch} from "react-router";
import FormContainer from "./FormContainer";
import HeaderComponent from "./HeaderComponent";
import ProductHandling from "../service/ProductHandling";
import ProductsComponent from "./ProductsComponent";
import NewProductFieldsComponent from "./NewProductFieldsComponent";


export class MainLayout extends React.Component {
    render() {
        return <div className='root'>
            <Route path='/' render={() => {
                return <div>
                    <HeaderComponent/>
                    <Switch>
                        <Route path='/log-in' render={() => <FormContainer title={'LogIn'}/>}/>
                        <Route path='/sign-up' render={() => <FormContainer title={'SignUp'}/>}/>
                    </Switch>
                    <ProductHandling/>
                    <NewProductFieldsComponent/>
                    <ProductsComponent/>
                </div>
            }}/>
        </div>
    }
};