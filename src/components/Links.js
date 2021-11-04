import React from 'react';
import Link from "./Link";
import Seo from "../helpers/Seo";
import Emoji from "../helpers/Emoji";

function Links(props) {
    return (
        <>
            <Seo
                title={props.title}
                description={props.subtitle}
                keywords={props.keywords}
                favicon={props.favicon}/>
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
                <Emoji emoji={props.emoji}/>
            </article>
        </>
    )
}

export default Links;