import React from 'react';
import {Helmet} from 'react-helmet-async';
import {siteName} from '../data/constants';

function Seo({
                 title,
                 description,
                 keywords,
                 favicon,
                 ogImage,
                 canonical,
                 meta = [],
                 link = []
             }) {
    return (
        <Helmet htmlAttributes={{lang: 'ru', prefix: 'og: //ogp.me/ns#'}}
                title={title}
                meta={[
                    {
                        charset: 'utf-8'
                    },
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1'
                    },
                    {
                        name: 'description',
                        content: description
                    },
                    {
                        name: 'keywords',
                        content: keywords
                    },
                    {
                        property: 'og:site_name',
                        content: siteName
                    },
                    {
                        property: 'og:title',
                        content: title
                    },
                    {
                        property: 'og:image',
                        content: ogImage
                    },
                    {
                        property: 'og:description',
                        content: description
                    }
                ]}
                link={[
                    {
                        rel: 'icon',
                        type: 'image/png',
                        href: favicon
                    },
                    {
                        rel: 'canonical',
                        href: canonical
                    }
                ]}
        />
    )
}

export default Seo;