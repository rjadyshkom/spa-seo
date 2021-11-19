import React from 'react';
import toggleRu from '../images/language-ru.png';
import toggleEn from '../images/language-en.png';

function LanguageSelector(props) {


    return (
        <div className="switcher">
            {
                props.language === 'ru'
                    ?
                    <img
                        src={toggleEn}
                        alt="Светлая иконка"
                        className="switcher__image"
                        onClick={() => props.onLanguageSelect('ru')}
                    />

                    :
                    <img
                        src={toggleRu}
                        alt="Тёмная иконка"
                        className="switcher__image"
                        onClick={() => props.onLanguageSelect('en')}
                    />

            }
        </div>
    );
}

export {LanguageSelector};