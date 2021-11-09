import React from 'react';
import {NavBar} from './NavBar';
import {content} from '../data/content';
import {ThemeSwitcher} from './ThemeSwitcher';

export function Header(props) {

    return (
        <div className="header">
            <NavBar data={content}/>
            <ThemeSwitcher onThemeChange={props.onThemeChange} darkTheme={props.darkTheme}/>
        </div>
    )
}