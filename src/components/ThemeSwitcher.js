import themeIconDark from '../images/theme-icon-dark.png';
import themeIconLight from '../images/theme-icon-light.png';

export function ThemeSwitcher(props) {

    return (
        <div className="switcher">
            {
                props.theme === 'dark'
                    ?
                    <img
                        src={themeIconLight}
                        alt="Светлая иконка"
                        className="switcher__image"
                        onClick={() => props.onThemeChange('light')}
                    />
                    :
                    <img
                        src={themeIconDark}
                        alt="Тёмная иконка"
                        className="switcher__image"
                        onClick={() => props.onThemeChange('dark')}
                    />
            }
        </div>
    )
}