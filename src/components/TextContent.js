import React from 'react';

function TextContent(props) {
    return (
        <article className="content">
            <h1 className="title">{props.title}</h1>
            <p className="subtitle">{props.subtitle}</p>
        </article>
    )
}

export default TextContent;