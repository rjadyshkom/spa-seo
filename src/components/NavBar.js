import React from "react";
import {NavLink} from "react-router-dom";
import routes from "../data/routes";
import titles from "../data/titles";

function NavBar() {

    return (
        <nav className="navbar">
            <NavLink exact to={routes.home} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.spa}</NavLink>
            <NavLink to={routes.problem} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.problem}</NavLink>
            <NavLink to={routes.task} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.task}</NavLink>
            <NavLink to={routes.solution} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.solution}</NavLink>
            <NavLink to={routes.technologies} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.technologies}</NavLink>
            <NavLink to={routes.result} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.result}</NavLink>
            <NavLink to={routes.why} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.why}</NavLink>
            <NavLink to={routes.who} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.who}</NavLink>
        </nav>
    )
}

export default NavBar;