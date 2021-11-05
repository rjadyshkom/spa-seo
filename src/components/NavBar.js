import React from "react";
import NavItem from "./NavItem";

function NavBar(props) {

    return (
        <nav className="navbar">
            {props.data.map((item, key) => (
                <NavItem
                    item={item}
                    key={key}
                />
            )).slice(0, -1)}
        </nav>
    )
}

export default NavBar;