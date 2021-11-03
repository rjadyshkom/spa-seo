import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="navbar__link_active" className="navbar__link">Страница 1</NavLink>
            <NavLink to="/page-2" activeClassName="navbar__link_active" className="navbar__link">Страница 2</NavLink>
            <NavLink to="/page-3" activeClassName="navbar__link_active" className="navbar__link">Страница 3</NavLink>
            <NavLink to="/page-4" activeClassName="navbar__link_active" className="navbar__link">Страница 4</NavLink>
            <NavLink to="/page-5" activeClassName="navbar__link_active" className="navbar__link">Страница 5</NavLink>
        </nav>
    )
}

export default NavBar;