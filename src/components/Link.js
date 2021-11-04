import React from 'react';

function Link({item}) {
    return (
        <>
            <li className="subnav__item">
                <a href={item.link}
                   className="subnav__link" target="_blank"
                   rel="noreferrer">{item.name}<span
                    className="subnav__description">{item.description}</span>
                </a>
            </li>
        </>
    )
}

export default Link;