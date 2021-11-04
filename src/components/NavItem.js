import React from 'react';
import {NavLink} from "react-router-dom";

function NavItem({item}) {
    return (
        <NavLink exact to={item.link}
                 activeClassName="navbar__link_active"
                 className="navbar__link">
            {item.title}
        </NavLink>
    )
}

export default NavItem;

