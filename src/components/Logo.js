import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link
            to="/"
            className="logo"
        >
            <div className="logo__container">
                <p className="logo__title">SPA</p>
                <span className="logo__subtitle">.ohuel.ru</span>
            </div>
        </Link>
    )
}

export { Logo };