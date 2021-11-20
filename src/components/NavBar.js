import React, {useContext} from 'react';
import {NavItem} from './NavItem';
import {TranslationContext} from '../contexts/TranslationContext';

export function NavBar() {

    const translation = useContext(TranslationContext);
    const exclude = ['notFound', 'repos', 'authors', 'siteName'];

    const navigation = Object.keys(translation)
        .filter(key => !exclude.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: translation[key]
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