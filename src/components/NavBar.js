import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="navbar__link_active" className="navbar__link">SPA</NavLink>
            <NavLink to="/problem" activeClassName="navbar__link_active" className="navbar__link">Проблема</NavLink>
            <NavLink to="/solution" activeClassName="navbar__link_active" className="navbar__link">Решение</NavLink>
            <NavLink to="/technologies" activeClassName="navbar__link_active" className="navbar__link">Технологии</NavLink>
            <NavLink to="/why" activeClassName="navbar__link_active" className="navbar__link">Зачем</NavLink>
        </nav>
    )
}

export default NavBar;