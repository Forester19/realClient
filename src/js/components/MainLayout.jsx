import React from 'react';
import {Route, Switch} from "react-router";
import FormContainer from "./FormContainer";
import HeaderComponent from "./HeaderComponent";
import ProductHandling from "../service/ProductHandling";
import ProductsComponent from "./ProductsComponent";
import NewProductFieldsComponent from "./NewProductFieldsComponent";
import {Circle} from "./Circle";
import {FilterItem} from "./SiteFilterItemComponent";


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
                    <div className={'filterHolder'}>
                        <FilterItem name={'#1filer'} items={['item#1','item#2','item#3']}/>
                        <FilterItem name={'#2filer'}/>
                        <FilterItem name={'#3filer'}/>
                        <FilterItem name={'#4filer'}/>
                        <FilterItem name={'#5filer'}/>
                    </div>
                    <ProductHandling/>
                    <NewProductFieldsComponent/>
                    <ProductsComponent/>
                    <Circle step={100} width={250} height={250}/>
                    <Circle step={6} width={250} height={250}/>
                </div>
            }}/>
        </div>
    }
};