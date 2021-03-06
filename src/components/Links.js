import React from 'react';
import { Link } from './Link';
import { Seo } from '../helpers/Seo';
import { Emoji } from '../helpers/Emoji';

export function Links(props) {

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
                <nav className="subnav">
                    {
                        Object.values(props.data).map((item, key) => (
                            <Link
                                item={item}
                                key={key}
                            />
                        ))
                    }
                </nav>
                <Emoji
                    emoji={props.emoji}
                    title={props.title}
                />
            </article>
        </>
    )
}