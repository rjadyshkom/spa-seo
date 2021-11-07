import React from 'react';
import {Seo} from '../helpers/Seo';
import {Emoji} from '../helpers/Emoji';
import {baseUrl} from '../utils/constants';

export function Article(props) {

    return (
        <>
            <Seo
                title={props.title}
                description={props.subtitle}
                keywords={props.keywords}
                favicon={props.favicon}
                ogImage={props.ogImage}
                canonical={`${baseUrl}${props.canonical}`}
            />

            <article className="content">
                <h1 className="title">{props.title}</h1>
                <p className="subtitle">{props.subtitle}</p>
                <Emoji emoji={props.emoji}
                       title={props.title}
                />
            </article>
        </>
    )
}