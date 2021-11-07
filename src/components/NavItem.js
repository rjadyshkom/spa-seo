import React from 'react';
import {NavLink} from 'react-router-dom';

export function NavItem({item}) {

    return (
        <NavLink exact to={item.link}
                 activeClassName="navbar__link_active"
                 className="navbar__link">
            {item.title}
        </NavLink>
    )
}

