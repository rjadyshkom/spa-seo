import React from 'react';
import {routes} from "../data/routes";

export const translations = {
    ru: {
        spa: {
            link: routes.spa,
            title: 'SPA',
            description: 'SPA (Single Page Application) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.'
        },
        problem: {
            link: routes.problem,
            title: 'Проблема',
            description: 'Поисковые роботы не умеют исполнять JavaScript-код, поэтому при посещении SPA-ресурса «из коробки», они получают пустой index.html и содержимое сайта не индексируется.'
        },
        task: {
            link: routes.task,
            title: 'Задача',
            description: 'С минимальными изменениями в существующем проекте сделать так, чтобы поисковый робот индексировал все страницы SPA-приложения, а также установить для каждой страницы уникальные meta-теги (title, description, keywords ... и т.д.).'
        },
        solution: {
            link: routes.solution,
            title: 'Решение',
            description: 'Пререндеринг проекта после сборки (проход по всем страницам SPA-приложения и создание их HTML копий).'
        },
        technologies: {
            link: routes.technologies,
            title: 'Технологии',
            description: 'React-snap для пререндеринга, React-helmet для мета-тегов'
        },
        result: {
            link: routes.result,
            title: 'Результат',
            description: 'Ваше SPA полностью проиндексировано, сервер не справляется с наплывом посетителей.'
        },
        why: {
            link: routes.why,
            title: 'Зачем',
            description: 'Проверить решение на практике, освежить в памяти React, JavaScript, БЭМ, роутинг, компонентный подход и вёрстку.'
        },
        who: {
            link: routes.who,
            title: 'Кто',
            description: 'Сергей Митрофанов сделал сайт, Антон Россельхоз банк написал статью, GitHub сохранил исходник.'
        },
        notFound: {
            title: '404',
            description: 'Страница не найдена'
        }
    },
    en: {
        spa: {
            link: routes.spa,
            title: 'SPA',
            description: 'SPA (Single Page Application) — is a web application or website that uses a single HTML document as the shell for all web pages and arranges interaction with the user through dynamically loaded HTML, CSS, and JavaScript.'
        },
        problem: {
            link: routes.problem,
            title: 'Problem',
            description: 'Search engine robots can not execute JavaScript-code, so when you visit SPA-resource «out of the box», they get an empty index.html and the site content is not indexed.'
        },
        task: {
            link: routes.task,
            title: 'Task',
            description: 'With minimal changes in the existing project to make a search robot index all pages of the SPA-application, as well as set for each page unique meta tags (title, description, keywords … etc).'
        },
        solution: {
            link: routes.solution,
            title: 'Solution',
            description: 'Pre-rendering the project after the build (walk through all pages of the SPA-application and create their HTML copies).'
        },
        technologies: {
            link: routes.technologies,
            title: 'Technologies',
            description: 'React-snap for pre-rendering, React-helmet for meta-tags'
        },
        result: {
            link: routes.result,
            title: 'Result',
            description: 'Your SPA is fully indexed, the server can not cope with the influx of visitors.'
        },
        why: {
            link: routes.why,
            title: 'Why',
            description: 'To test the solution in practice, to brush up on React, JavaScript, BEM, routing, component approach, and layout.'
        },
        who: {
            link: routes.who,
            title: 'Who',
            description: 'Sergei Mitrofanov made the site, Anton Rosselkhoz Bank wrote the article, GitHub saved the source.'
        },
        notFound: {
            title: '404',
            description: 'Page not found'
        }
    }
}

export const TranslationContext = React.createContext();