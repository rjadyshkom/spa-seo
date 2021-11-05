import spa from '../images/spa.png';
import ogSpa from '../images/og-spa.jpg';
import problem from '../images/problem.png';
import ogProblem from '../images/og-problem.jpg';
import task from '../images/task.png';
import ogTask from '../images/og-task.jpg';
import solution from '../images/solution.png';
import ogSolution from '../images/og-solution.jpg';
import technologies from '../images/technologies.png';
import ogTechnologies from '../images/og-technologies.jpg';
import result from '../images/result.png';
import ogResult from '../images/og-result.jpg';
import why from '../images/why.png';
import ogWhy from '../images/og-why.jpg';
import who from '../images/who.png';
import ogWho from '../images/og-who.jpg';
import notFound from '../images/not-found.png'
import ogNotFound from '../images/og-not-found.jpg';

const content = [
    {
        title: 'SPA',
        link: '/',
        description: 'SPA (Single Page Application) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.',
        keywords: 'SPA, SEO, Single Page Application, spa index, spa prerender, react prerender, how to index spa',
        image: spa,
        ogImage: ogSpa
    },
    {
        title: 'Проблема',
        link: '/problem',
        description: 'Поисковые роботы не умеют исполнять JavaScript-код, поэтому при посещении SPA-ресурса «из коробки», они получают пустой index.html и содержимое сайта не индексируется.',
        keywords: 'как индексировать SPA, проблема индексации Single Page Application, spa index',
        image: problem,
        ogImage: ogProblem
    },
    {
        title: 'Задача',
        link: '/task',
        description: 'С минимальными изменениями в существующем проекте сделать так, чтобы поисковый робот индексировал все страницы SPA-приложения, а также установить для каждой страницы уникальные meta-теги (title, description, keywords ...etc).',
        keywords: 'мета для SPA, теги для SPA, проиндексировать все страницы SPA, spa indexing',
        image: task,
        ogImage: ogTask
    },
    {
        title: 'Решение',
        link: '/solution',
        description: 'Пререндеринг проекта после сборки (проход по всем страницам SPA-приложения и создание их HTML копий).',
        keywords: 'Пререндеринг SPA, SPA prerender, prerender SPA pages',
        image: solution,
        ogImage: ogSolution
    },
    {
        title: 'Технологии',
        link: '/technologies',
        description: 'React-snap для пререндеринга, React-helmet для мета-тегов',
        keywords: 'react-snap, react-helmet, snap prerendering, helmet meta react, indexing SPA, как индексировать SPA',
        image: technologies,
        ogImage: ogTechnologies
    },
    {
        title: 'Результат',
        link: '/result',
        description: 'Ваше SPA полностью проиндексировано, сервер не справляется с наплывом посетителей.',
        keywords: 'SPA индексируется, робот посетил SPA',
        image: result,
        ogImage: ogResult
    },
    {
        title: 'Зачем',
        link: '/why',
        description: 'Проверить решение на практике, освежить в памяти React, JavaScript, БЭМ, роутинг, компонентный подход и вёрстку.',
        keywords: 'Яндекс Практикум работы, практика программирования, javascript, БЭМ, BEM, выпускники практикума',
        image: why,
        ogImage: ogWhy
    },
    {
        title: 'Кто',
        link: '/who',
        description: 'Сергей Митрофанов сделал сайт, Антон Россельхоз банк написал статью',
        keywords: 'Сергей Митрофанов, Антон Россельхоз банк full-stack developer',
        image: who,
        ogImage: ogWho
    },
    // последний элемент массива исключён из навигации
    {
        title: '404',
        link: '*',
        description: 'Страница не найдена',
        keywords: 'SPA, SEO, Single Page Application, spa index, spa prerender, react prerender, how to index spa',
        image: notFound,
        ogImage: ogNotFound
    }
]

export default content;