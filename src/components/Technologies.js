import React from 'react';

function Technologies(props) {
    return (
        <article className="content">
            <h1 className="title">{props.title}</h1>
            <nav className="subnav">
                <li className="subnav__item"><a href="https://github.com/stereobooster/react-snap"
                                                className="subnav__link" target="_blank"
                                                rel="noreferrer">React-Snap<span
                    className="subnav__description">Для пререндеринга</span></a></li>
                <li className="subnav__item"><a href="https://github.com/nfl/react-helmet"
                                                className="subnav__link" target="_blank"
                                                rel="noreferrer">React-Helmet<span
                    className="subnav__description">Для meta-тегов</span></a></li>
            </nav>
        </article>
    )
}

export default Technologies;