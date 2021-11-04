import spa from '../images/spa.png';
import problem from '../images/problem.png';
import task from '../images/task.png';
import solution from '../images/solution.png';
import technologies from '../images/technologies.png';
import result from '../images/result.png';
import why from '../images/why.png';
import who from '../images/who.png';

const content = [
    {
        title: 'SPA',
        link: '/',
        description: 'SPA (Single Page Application) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.',
        keywords: 'SPA, SEO, Single Page Application',
        image: spa
    },
    {
        title: 'Проблема',
        link: '/problem',
        description: 'Поисковые роботы не умеют исполнять JavaScript-код, поэтому при посещении SPA-ресурса «из коробки», они получают пустой index.html и содержимое сайта не индексируется.',
        keywords: 'как индексировать SPA, проблема индексации Single Page Application, spa index',
        image: problem
    },
    {
        title: 'Задача',
        link: '/task',
        description: 'С минимальными изменениями в существующем проекте сделать так, чтобы поисковый робот индексировал все страницы SPA-приложения, а также установить для каждой страницы уникальные meta-теги (title, description, keywords ...etc).',
        keywords: 'мета для SPA, теги для SPA, проиндексировать все страницы SPA, spa indexing',
        image: task
    },
    {
        title: 'Решение',
        link: '/solution',
        description: 'Пререндеринг проекта после сборки (проход по всем страницам SPA-приложения и создание их HTML копий).',
        keywords: 'Пререндеринг SPA, SPA prerender, prerender SPA pages',
        image: solution
    },
    {
        title: 'Технологии',
        link: '/technologies',
        description: 'React-snap для пререндеринга, React-helmet для мета-тегов',
        keywords: 'react-snap, react-helmet, snap prerendering, helmet meta react, indexing SPA, как индексировать SPA',
        image: technologies
    },
    {
        title: 'Результат',
        link: '/result',
        description: 'Ваше SPA полностью проиндексировано, сервер не справляется с наплывом посетителей.',
        keywords: 'SPA индексируется, робот посетил SPA',
        image: result
    },
    {
        title: 'Зачем',
        link: '/why',
        description: 'Проверить решение на практике, освежить в памяти React, JavaScript, БЭМ, роутинг, компонентный подход и вёрстку.',
        keywords: 'Яндекс Практикум работы, практика программирования, javascript, БЭМ, BEM, выпускники практикума',
        image: why
    },
    {
        title: 'Кто',
        link: '/who',
        description: 'Сергей Митрофанов сделал сайт, Антон Россельхоз банк написал статью',
        keywords: 'Сергей Митрофанов, Антон Россельхоз банк full-stack developer',
        image: who
    }
]

export default content;