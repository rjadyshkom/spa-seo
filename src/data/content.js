import {
    spa,
    spaDark,
    ogSpa,
    ogSpaDark,
    problem,
    problemDark,
    ogProblem,
    ogProblemDark,
    task,
    taskDark,
    ogTask,
    ogTaskDark,
    solution,
    solutionDark,
    ogSolution,
    ogSolutionDark,
    technologies,
    technologiesDark,
    ogTechnologies,
    ogTechnologiesDark,
    result,
    resultDark,
    ogResult,
    ogResultDark,
    why,
    whyDark,
    ogWhy,
    ogWhyDark,
    who,
    whoDark,
    ogWho,
    ogWhoDark,
    notFound,
    notFoundDark,
    ogNotFound,
    ogNotFoundDark
} from '../utils/constants';

export const content = {
    spa: {
        title: 'SPA',
        link: '/',
        description: 'SPA (Single Page Application) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.',
        keywords: 'SPA, SEO, Single Page Application, spa index, spa prerender, react prerender, how to index spa',
        image: spa,
        darkImage: spaDark,
        ogImage: ogSpa,
        darkOgImage: ogSpaDark
    },
    problem: {
        title: 'Проблема',
        link: '/problem',
        description: 'Поисковые роботы не умеют исполнять JavaScript-код, поэтому при посещении SPA-ресурса «из коробки», они получают пустой index.html и содержимое сайта не индексируется.',
        keywords: 'как индексировать SPA, проблема индексации Single Page Application, spa index',
        image: problem,
        darkImage: problemDark,
        ogImage: ogProblem,
        darkOgImage: ogProblemDark
    },
    task: {
        title: 'Задача',
        link: '/task',
        description: 'С минимальными изменениями в существующем проекте сделать так, чтобы поисковый робот индексировал все страницы SPA-приложения, а также установить для каждой страницы уникальные meta-теги (title, description, keywords ...etc).',
        keywords: 'мета для SPA, теги для SPA, проиндексировать все страницы SPA, spa indexing',
        image: task,
        darkImage: taskDark,
        ogImage: ogTask,
        darkOgImage: ogTaskDark
    },
    solution: {
        title: 'Решение',
        link: '/solution',
        description: 'Пререндеринг проекта после сборки (проход по всем страницам SPA-приложения и создание их HTML копий).',
        keywords: 'Пререндеринг SPA, SPA prerender, prerender SPA pages',
        image: solution,
        darkImage: solutionDark,
        ogImage: ogSolution,
        darkOgImage: ogSolutionDark
    },
    technologies: {
        title: 'Технологии',
        link: '/technologies',
        description: 'React-snap для пререндеринга, React-helmet для мета-тегов',
        keywords: 'react-snap, react-helmet, snap prerendering, helmet meta react, indexing SPA, как индексировать SPA',
        image: technologies,
        darkImage: technologiesDark,
        ogImage: ogTechnologies,
        darkOgImage: ogTechnologiesDark
    },
    result: {
        title: 'Результат',
        link: '/result',
        description: 'Ваше SPA полностью проиндексировано, сервер не справляется с наплывом посетителей.',
        keywords: 'SPA индексируется, робот посетил SPA',
        image: result,
        darkImage: resultDark,
        ogImage: ogResult,
        darkOgImage: ogResultDark
    },
    why: {
        title: 'Зачем',
        link: '/why',
        description: 'Проверить решение на практике, освежить в памяти React, JavaScript, БЭМ, роутинг, компонентный подход и вёрстку.',
        keywords: 'Яндекс Практикум работы, практика программирования, javascript, БЭМ, BEM, выпускники практикума',
        image: why,
        darkImage: whyDark,
        ogImage: ogWhy,
        darkOgImage: ogWhyDark
    },
    who: {
        title: 'Кто',
        link: '/who',
        description: 'Сергей Митрофанов сделал сайт, Антон Россельхоз банк написал статью, GitHub сохранил исходник.',
        keywords: 'Сергей Митрофанов, Антон Россельхоз банк full-stack developer',
        image: who,
        darkImage: whoDark,
        ogImage: ogWho,
        darkOgImage: ogWhoDark
    },
    // исключён из навигации
    notFound: {
        title: '404',
        link: '*',
        description: 'Страница не найдена',
        keywords: 'SPA, SEO, Single Page Application, spa index, spa prerender, react prerender, how to index spa',
        image: notFound,
        darkImage: notFoundDark,
        ogImage: ogNotFound,
        darkOgImage: ogNotFoundDark
    }
}