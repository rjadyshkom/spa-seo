import {useState, useEffect} from 'react';

export function ThemeSwitcher() {

    const [theme, setTheme] = useState('light');

    function toggleTheme(theme) {
        setTheme(theme)
        if (theme === 'dark')
            document.body.classList.add('root_dark')
        else
            document.body.classList.remove('root_dark')
    }

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => toggleTheme(e.matches ? 'dark' : 'light'));
        toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, []);
    return (
        <div className="switcher">
            {
                theme === 'dark'
                    ?
                    <button className="switcher__button_theme_light" onClick={() => toggleTheme('light')}>Темно</button>
                    :
                    <button className="switcher__button_theme_light" onClick={() => toggleTheme('dark')}>Светло</button>
            }
        </div>
    )
}