import React from 'react';
import {routes} from "../data/routes";

export const translations = {
    ru: {
        spa: {
            link: routes.spa,
            title: 'SPA',
            keywords: 'SPA SEO, одностраничное приложение, индексирование одностраничных приложений реакт, spa пререндер, react пререндеринг, как индексировать spa',
            description: 'SPA (Single Page Application) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.'
        },
        problem: {
            link: routes.problem,
            title: 'Проблема',
            keywords: 'как индексировать SPA, проблема индексирования одностраничных приложений, проблемы индексирования spa',
            description: 'Поисковые роботы не умеют исполнять JavaScript-код, поэтому при посещении SPA-ресурса «из коробки», они получают пустой index.html и содержимое сайта не индексируется.'
        },
        task: {
            link: routes.task,
            title: 'Задача',
            keywords: 'мета для SPA, мета теги для SPA, проиндексировать все страницы SPA, spa индексирование страниц, как проиндексировать все страницы spa react',
            description: 'С минимальными изменениями в существующем проекте сделать так, чтобы поисковый робот индексировал все страницы SPA-приложения, а также установить для каждой страницы уникальные meta-теги (title, description, keywords ... и т.д.).'
        },
        solution: {
            link: routes.solution,
            title: 'Решение',
            keywords: 'пререндеринг SPA, пререндеринг страниц SPA, пререндер всех страниц SPA приложения, пререндер страниц одностраничного приложения реакт',
            description: 'Пререндеринг проекта после сборки (проход по всем страницам SPA-приложения и создание их HTML копий).'
        },
        technologies: {
            link: routes.technologies,
            title: 'Технологии',
            keywords: 'react-snap, react-helmet, snap пререндер, helmet мета теги react, проиндексировать SPA snap, react snap для одностраничных приложений, react helmet SPA, react helmet для одностраничных приложений',
            description: 'React-snap для пререндеринга, React-helmet для мета-тегов'
        },
        result: {
            link: routes.result,
            title: 'Результат',
            keywords: 'SPA проиндексировано, одностраничное приложение успешно проиндексировано, поисковик индексирует spa',
            description: 'Ваше SPA полностью проиндексировано, сервер не справляется с наплывом посетителей.'
        },
        why: {
            link: routes.why,
            title: 'Зачем',
            keywords: 'студент Яндекс.Практикума, практика программирования, javascript, react, БЭМ, выпускник Яндекс Практикума',
            description: 'Проверить решение на практике, освежить в памяти React, JavaScript, БЭМ, роутинг, компонентный подход и вёрстку.'
        },
        who: {
            link: routes.who,
            title: 'Кто',
            keywords: 'Сергей Митрофанов, выпускник курса веб разработки яндекс, Антон Россельхоз банк full-stack разработчик, репозиторий GitHub',
            description: 'Сергей Митрофанов сделал сайт, Антон Россельхоз банк написал статью, GitHub сохранил исходник.'
        },
        contacts: {
            link: routes.contacts,
            title: 'Контакты',
            keywords: 'Отправка писем React, Contact Form 7 API, валидация форм React, Formik.',
            description: 'Отправка писем из React без использования собственного сервера и сторонних сервисов.'
        },
        notFound: {
            title: '404',
            description: 'Страница не найдена'
        },
        repos: {
            prerender: {
                link: 'https://github.com/stereobooster/react-snap',
                name: 'React-Snap',
                description: 'Для пререндеринга'

            },
            meta: {
                link: 'https://github.com/nfl/react-helmet',
                name: 'React-Helmet',
                description: 'Для meta-тегов'

            }
        },
        authors: {
            sergei: {
                link: 'https://t.me/jessychrist',
                name: 'Сергей',
                description: 'Сделал сайт'

            },
            anton: {
                link: 'https://habr.com/ru/company/rshb/blog/529636',
                name: 'Антон',
                description: 'Написал статью'

            },
            github: {
                link: 'https://github.com/rjadyshkom/spa-seo',
                name: 'GitHub',
                description: 'Сохранил исходник'
            }
        },
        siteName: 'Простой способ индексации SPA.',
        form: {
            labels: {
                name: 'Имя:',
                email: 'Электропочта:',
                message: 'Сообщение:'
            },
            validationMessages: {
                name: {
                    min: 'Минимум 2 символа',
                    required: 'Укажите имя'
                },
                email: {
                    min: 'Минимум 7 символов',
                    matches: 'Некорректный email',
                    required: 'Укажите email'
                },
                message: {
                    max: 'Максимум 100 символов.',
                    required: 'Напишите хоть что-нибудь'
                }
            },
            placeholders: {
                name: 'Чтобы знать, как к Вам обращаться',
                email: 'Чтобы было, куда отвечать',
                message: 'Чтобы понять, о чём пойдёт речь'
            },
            buttonNames: {
                reset: 'Сбросить',
                submit: 'Отправить'
            },
            messages: {
                success: 'Успешный успех!',
                error: 'Неудачная неудача!'
            }
        }
    },
    en: {
        spa: {
            link: routes.spa,
            title: 'SPA',
            keywords: 'SPA, SEO, Single Page Application, spa index, spa prerender, react prerender, how to index spa',
            description: 'SPA (Single Page Application) — is a web application or website that uses a single HTML document as the shell for all web pages and arranges interaction with the user through dynamically loaded HTML, CSS, and JavaScript.'
        },
        problem: {
            link: routes.problem,
            title: 'Problem',
            keywords: 'how to index SPA, Single Page Application indexing problem, spa index problem',
            description: 'Search engine robots can not execute JavaScript-code, so when you visit SPA-resource «out of the box», they get an empty index.html and the site content is not indexed.'
        },
        task: {
            link: routes.task,
            title: 'Task',
            keywords: 'meta for SPA, meta-tags for SPA, index all SPA pages, spa pages indexing',
            description: 'With minimal changes in the existing project to make a search robot index all pages of the SPA-application, as well as set for each page unique meta tags (title, description, keywords … etc).'
        },
        solution: {
            link: routes.solution,
            title: 'Solution',
            keywords: 'pre-render SPA, SPA pages pre-rendering, prerender all SPA pages',
            description: 'Pre-rendering the project after the build (walk through all pages of the SPA-application and create their HTML copies).'
        },
        technologies: {
            link: routes.technologies,
            title: 'Technologies',
            keywords: 'react-snap, react-helmet, snap pre-rendering, helmet meta react, indexing SPA snap, react snap for SPA, react helmet for single page application',
            description: 'React-snap for pre-rendering, React-helmet for meta-tags'
        },
        result: {
            link: routes.result,
            title: 'Result',
            keywords: 'SPA indexed, single page application successfully indexed, search engines indexed spa',
            description: 'Your SPA is fully indexed, the server can not cope with the influx of visitors.'
        },
        why: {
            link: routes.why,
            title: 'Why',
            keywords: 'Yandex.Practicum student, programming practice, javascript, react, BEM, Yandex Practicum Alumni',
            description: 'To test the solution in practice, to brush up on React, JavaScript, BEM, routing, component approach, and layout.'
        },
        who: {
            link: routes.who,
            title: 'Who',
            keywords: 'Sergei Mitrofanov, Yandex Practicum alumni dev, Anton Rosselhoz bank full-stack developer, git hub repo',
            description: 'Sergei Mitrofanov made the site, Anton Rosselkhoz Bank wrote the article, GitHub saved the source.'
        },
        contacts: {
            link: routes.contacts,
            title: 'Contacts',
            keywords: 'Send email from React, Contact Form 7 API, React form validation, Formik.',
            description: 'Sending emails from React without using your own server or third-party services.'
        },
        notFound: {
            title: '404',
            description: 'Page not found'
        },
        repos: {
            prerender: {
                link: 'https://github.com/stereobooster/react-snap',
                name: 'React-Snap',
                description: 'For pre-rendering'

            },
            meta: {
                link: 'https://github.com/nfl/react-helmet',
                name: 'React-Helmet',
                description: 'For meta-tags'

            }
        },
        authors: {
            sergei: {
                link: 'https://t.me/jessychrist',
                name: 'Sergei',
                description: 'Made a website'

            },
            anton: {
                link: 'https://habr.com/ru/company/rshb/blog/529636',
                name: 'Anton',
                description: 'Wrote an article'

            },
            github: {
                link: 'https://github.com/rjadyshkom/spa-seo',
                name: 'GitHub',
                description: 'Saved the source'

            }
        },
        siteName: 'A simple way to index the SPA.',
        form: {
            labels: {
              name: 'Name:',
              email: 'Email:',
              message: 'Message:'
            },
            validationMessages: {
                name: {
                    min: 'At least 2 characters',
                    required: 'Specify name'
                },
                email: {
                    min: 'At least 7 characters',
                    matches: 'Invalid email',
                    required: 'Specify email'
                },
                message: {
                    max: 'Maximum 100 characters.',
                    required: 'Write something.'
                }
            },
            placeholders: {
                name: 'To know how to address you',
                email: 'To have something to answer to',
                message: 'To understand what we\'re talking about'
            },
            buttonNames: {
                reset: ' Reset',
                submit: 'Submit'
            },
            messages: {
                success: 'Successful success!',
                error: 'Unfortunate setback!'
            }
        }
    }
}

export const TranslationContext = React.createContext();