import React from 'react';
import { Seo } from '../helpers/Seo';
import { Emoji } from '../helpers/Emoji';

export function Article(props) {

    return (
        <>
            <Seo
                title={props.title}
                description={props.subtitle}
                keywords={props.keywords}
                favicon={props.favicon}
                ogImage={props.ogImage}
                language={props.language}
                siteName={props.siteName}
            />

            <article className="content">
                <h1 className="title">{props.title}</h1>
                <p className="subtitle">{props.subtitle}</p>
                <Emoji
                    emoji={props.emoji}
                    title={props.title}
                />
            </article>
        </>
    )
}