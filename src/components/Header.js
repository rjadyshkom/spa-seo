import React from 'react';
import { NavBar } from './NavBar';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';

export function Header(props) {

    return (
        <div className="header">
            <Logo />
            <NavBar />
            <div className="header__container">
                <ThemeSwitcher
                    onThemeChange={props.onThemeChange}
                    theme={props.theme}
                />
                <LanguageSelector
                    onLanguageSelect={props.onLanguageSelect}
                    language={props.language}
                />
            </div>
        </div>
    )
}