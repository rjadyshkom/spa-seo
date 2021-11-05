import React from 'react';
import NavBar from './NavBar';
import content from '../data/content';


function Header() {

    return (
        <div className="header">
            <NavBar data={content}/>
        </div>
    )
}

export default Header;