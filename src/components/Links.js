import React from 'react';
import Link from "./Link";

function Links(props) {
    return (
        <article className="content">
            <h1 className="title">{props.title}</h1>
            <nav className="subnav">
                {props.data.map((item, key) => (
                    <Link
                        item={item}
                        key={key}
                    />
                ))}
            </nav>
        </article>
    )
}

export default Links;