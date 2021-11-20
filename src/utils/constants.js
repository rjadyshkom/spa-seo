export const baseUrl = 'https://spa.ohuel.ru';
export const siteName = 'Простой способ индексации SPA.';

export const systemLanguage = () => {
    const currentUserLanguage = navigator.language.slice(0, 2).toString();
    if (currentUserLanguage === 'ru') return currentUserLanguage
    else return ('en')
};

export const reposRu = {
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
};

export const reposEn = {
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
};

export const authorsRu = {
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
};

export const authorsEn = {
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
};

// тёмная тема иконки и картинки
export const spa = process.env.PUBLIC_URL + '/spa.png';
export const problem = process.env.PUBLIC_URL + '/problem.png';
export const task = process.env.PUBLIC_URL + '/task.png';
export const solution = process.env.PUBLIC_URL + '/solution.png';
export const technologies = process.env.PUBLIC_URL + '/technologies.png';
export const result = process.env.PUBLIC_URL + '/result.png';
export const why = process.env.PUBLIC_URL + '/why.png';
export const who = process.env.PUBLIC_URL + '/who.png';
export const notFound = process.env.PUBLIC_URL + '/not-found.png';

// тёмная тема превью
export const ogSpa = process.env.PUBLIC_URL + '/og-spa.jpg';
export const ogProblem = process.env.PUBLIC_URL + '/og-problem.jpg';
export const ogTask = process.env.PUBLIC_URL + '/og-task.jpg';
export const ogSolution = process.env.PUBLIC_URL + '/og-solution.jpg';
export const ogTechnologies = process.env.PUBLIC_URL + '/og-technologies.jpg';
export const ogResult = process.env.PUBLIC_URL + '/og-result.jpg';
export const ogWhy = process.env.PUBLIC_URL + '/og-why.jpg';
export const ogWho = process.env.PUBLIC_URL + '/og-who.jpg';
export const ogNotFound = process.env.PUBLIC_URL + '/og-not-found.jpg';


// светлая тема иконки и картинки
export const spaDark = process.env.PUBLIC_URL + '/spa-dark.png';
export const problemDark = process.env.PUBLIC_URL + '/problem-dark.png';
export const taskDark = process.env.PUBLIC_URL + '/task-dark.png';
export const solutionDark = process.env.PUBLIC_URL + '/solution-dark.png';
export const technologiesDark = process.env.PUBLIC_URL + '/technologies-dark.png';
export const resultDark = process.env.PUBLIC_URL + '/result-dark.png';
export const whyDark = process.env.PUBLIC_URL + '/why-dark.png';
export const whoDark = process.env.PUBLIC_URL + '/who-dark.png';
export const notFoundDark = process.env.PUBLIC_URL + '/not-found-dark.png';

// светлая тема превью
// тёмная тема превью
export const ogSpaDark = process.env.PUBLIC_URL + '/og-spa-dark.jpg';
export const ogProblemDark = process.env.PUBLIC_URL + '/og-problem-dark.jpg';
export const ogTaskDark = process.env.PUBLIC_URL + '/og-task-dark.jpg';
export const ogSolutionDark = process.env.PUBLIC_URL + '/og-solution-dark.jpg';
export const ogTechnologiesDark = process.env.PUBLIC_URL + '/og-technologies-dark.jpg';
export const ogResultDark = process.env.PUBLIC_URL + '/og-result-dark.jpg';
export const ogWhyDark = process.env.PUBLIC_URL + '/og-why-dark.jpg';
export const ogWhoDark = process.env.PUBLIC_URL + '/og-who-dark.jpg';
export const ogNotFoundDark = process.env.PUBLIC_URL + '/og-not-found-dark.jpg';

export const toggleRu = process.env.PUBLIC_URL + '/language-ru.png';
export const toggleEn = process.env.PUBLIC_URL + '/language-en.png';