import toggleDark from '../images/toggle-dark.png';
import toggleLight from '../images/toggle-light.png';

export function ThemeSwitcher(props) {

    return (
        <div className="switcher">
            {
                props.darkTheme === 'dark'
                    ?
                    <img
                        src={toggleLight}
                        alt="Светлая иконка"
                        className="switcher__image"
                        onClick={() => props.onThemeChange('light')}
                    />

                    :
                    <img
                        src={toggleDark}
                        alt="Тёмная иконка"
                        className="switcher__image"
                        onClick={() => props.onThemeChange('dark')}
                    />

            }
        </div>
    )
}