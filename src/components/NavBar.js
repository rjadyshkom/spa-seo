import React from 'react';
import {NavItem} from './NavItem';

export function NavBar(props) {

    const data = props.data;
    const exclude = ['notFound'];

    const navigation = Object.keys(data)
        .filter(key => !exclude.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: data[key]
            };
        }, {});

    return (
        <nav className="navbar">
            {
                Object.values(navigation).map((item, key) => (
                    <NavItem
                        item={item}
                        key={key}
                    />
                ))
            }
        </nav>
    )
}