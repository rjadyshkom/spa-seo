import React from 'react';
import {toggleRu, toggleEn} from '../utils/constants';

function LanguageSelector(props) {


    return (
        <div className="switcher">
            {
                props.language === 'ru'
                    ?
                    <img
                        src={toggleEn}
                        alt="Переключатель на английский"
                        className="switcher__image"
                        onClick={() => props.onLanguageSelect('ru')}
                    />

                    :
                    <img
                        src={toggleRu}
                        alt="Переключатель на русский"
                        className="switcher__image"
                        onClick={() => props.onLanguageSelect('en')}
                    />

            }
        </div>
    );
}

export {LanguageSelector};