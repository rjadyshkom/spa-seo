import React from 'react';
import { languageIconRu, languageIconEn } from '../utils/constants';

function LanguageSelector(props) {

    return (
        <div className="switcher">
            {
                props.language === 'ru'
                    ?
                    <img
                        src={languageIconEn}
                        alt="Переключатель на английский"
                        className="switcher__image"
                        onClick={() => props.onLanguageSelect('ru')}
                    />
                    :
                    <img
                        src={languageIconRu}
                        alt="Переключатель на русский"
                        className="switcher__image"
                        onClick={() => props.onLanguageSelect('en')}
                    />
            }
        </div>
    );
}

export { LanguageSelector };