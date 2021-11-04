import React from "react"
import {Helmet} from "react-helmet"

function Seo({title, description, keywords, meta = []}) {
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
        />
    )
}

export default Seo;