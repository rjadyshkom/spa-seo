import React from 'react';
import {NavBar} from './NavBar';
import {content} from '../data/content';
import {ThemeSwitcher} from './ThemeSwitcher';

export function Header() {

    return (
        <div className="header">
            <NavBar data={content}/>
            <ThemeSwitcher/>
        </div>
    )
}