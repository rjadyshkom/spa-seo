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
                        property: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        property: 'twitter:image',
                        content: ogImage
                    },
                    {
                        property: 'og:image:width',
                        content: '1200'
                    },
                    {
                        property: 'og:image:height',
                        content: '630'
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
                        property: 'og:locale',
                        content: 'ru_RU'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    },
                    {
                        property: 'article:author',
                        content: 'Сергей Митрофанов @jessychrist'
                    },
                    {
                        property: 'article:tag',
                        content: 'SPA SEO'
                    },
                    {
                        property: 'article:published_time',
                        content: '2021-11-02T13:30:00+03:00'
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