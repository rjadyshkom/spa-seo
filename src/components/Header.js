import React from 'react';
import { NavBar } from './NavBar';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSelector } from './LanguageSelector';

export function Header(props) {

    return (
        <div className="header">
            <NavBar />
            <ThemeSwitcher
                onThemeChange={props.onThemeChange}
                theme={props.theme}
            />
            <LanguageSelector
                onLanguageSelect={props.onLanguageSelect}
                language={props.language}
            />
        </div>
    )
}