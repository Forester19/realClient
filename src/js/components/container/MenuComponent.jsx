import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Menu extends Component {
    render() {
        let menuItems = this.props.items;
        return (
            <div className={this.props.customClassName}>{
                menuItems.map((value, index) => {
                    const url = '/' + value.toLowerCase().trim().replace(' ', '-');
                    return <div className={this.props.mainMenuOption} key={index}><Link to={url}>{value}</Link></div>
                })
            };
            </div>
        );
    }
}
