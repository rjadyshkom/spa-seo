import React from 'react';
import { Helmet } from 'react-helmet-async';

export function Seo({
                        title,
                        description,
                        keywords,
                        favicon,
                        ogImage,
                        canonical,
                        language,
                        siteName,
                        meta = [],
                        link = []
                    }) {
    return (
        <Helmet
            htmlAttributes={{ lang: language, prefix: 'og: //ogp.me/ns#' }}
            title={title}
            meta={[
                {
                    name: 'description',
                    content: description
                },
                {
                    name: 'keywords',
                    content: keywords
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:title',
                    content: title
                },
                {
                    property: 'og:description',
                    content: description
                },
                {
                    property: 'og:url',
                    content: canonical
                },
                {
                    property: 'og:site_name',
                    content: siteName
                },
                {
                    property: 'og:image',
                    content: ogImage
                },
                {
                    property: 'og:image:width',
                    content: '1300'
                },
                {
                    property: 'og:image:height',
                    content: '630'
                },
                {
                    property: 'og:locale',
                    content: 'ru'
                },
                {
                    property: 'twitter:title',
                    content: title
                },
                {
                    property: 'twitter:description',
                    content: description
                },
                {
                    property: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    property: 'twitter:image',
                    content: ogImage
                },
                {
                    property: 'vk:image',
                    content: ogImage
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