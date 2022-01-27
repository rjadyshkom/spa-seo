import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavItem({ item }) {

    return (
        <NavLink
            to={item.link}
            className={({ isActive }) => (isActive ? 'navbar__link navbar__link_active' : 'navbar__link')}
        >
            {item.title}
        </NavLink>
    )
}

