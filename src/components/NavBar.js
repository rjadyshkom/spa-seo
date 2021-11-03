import React from "react";
import {NavLink} from "react-router-dom";
import links from "../data/links";
import titles from "../data/titles";

function NavBar() {

    return (
        <nav className="navbar">
            <NavLink exact to={links.home} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.spa}</NavLink>
            <NavLink to={links.problem} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.problem}</NavLink>
            <NavLink to={links.task} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.task}</NavLink>
            <NavLink to={links.solution} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.solution}</NavLink>
            <NavLink to={links.technologies} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.technologies}</NavLink>
            <NavLink to={links.result} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.result}</NavLink>
            <NavLink to={links.why} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.why}</NavLink>
            <NavLink to={links.who} activeClassName="navbar__link_active"
                     className="navbar__link">{titles.who}</NavLink>
        </nav>
    )
}

export default NavBar;