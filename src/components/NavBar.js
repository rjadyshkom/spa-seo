import React from "react";
import {NavLink} from "react-router-dom";
import links from "../data/links";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink exact to={links.home} activeClassName="navbar__link_active" className="navbar__link">SPA</NavLink>
            <NavLink to={links.problem} activeClassName="navbar__link_active"
                     className="navbar__link">Проблема</NavLink>
            <NavLink to={links.solution} activeClassName="navbar__link_active"
                     className="navbar__link">Решение</NavLink>
            <NavLink to={links.technologies} activeClassName="navbar__link_active"
                     className="navbar__link">Технологии</NavLink>
            <NavLink to={links.result} activeClassName="navbar__link_active"
                     className="navbar__link">Результат</NavLink>
            <NavLink to={links.why} activeClassName="navbar__link_active" className="navbar__link">Зачем</NavLink>
        </nav>
    )
}

export default NavBar;