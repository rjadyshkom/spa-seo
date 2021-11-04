import React from "react"
import {Helmet} from "react-helmet-async"

function Seo({title, description, keywords, favicon, meta = [], link = []}) {
    return (
        <Helmet title={title}
                htmlAttributes={{lang: "ru"}}
                meta={[
                    {
                        name: 'description',
                        content: description
                    },
                    {
                        name: 'keywords',
                        content: keywords
                    }
                ]}
                link={[
                    {
                        rel: 'icon',
                        type: 'image/png',
                        href: favicon
                    }
                ]}

        />
    )
}

export default Seo;