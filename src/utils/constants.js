export const baseUrl = 'https://spa.ohuel.ru';
export const siteName = 'Простой способ индексации SPA.';
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const systemLanguage = () => {
    const currentUserLanguage = navigator.language.slice(0, 2).toString();
    if (currentUserLanguage === 'ru') return currentUserLanguage
    else return ('en')
};

export const showOrHideMessageSmoothly = () => {
    const formInfo = document.querySelector('.form__info');
    if (!formInfo.classList.contains('form__info_visible')) {
        formInfo.classList.add('form__info_visible');
    } else {
        formInfo.classList.remove('form__info_visible');
    }
}

// Корректные пути изображений для поисковых роботов
export const spa = process.env.REACT_APP_PUBLIC_URL + '/spa.png';
export const problem = process.env.REACT_APP_PUBLIC_URL + '/problem.png';
export const task = process.env.REACT_APP_PUBLIC_URL + '/task.png';
export const solution = process.env.REACT_APP_PUBLIC_URL + '/solution.png';
export const technologies = process.env.REACT_APP_PUBLIC_URL + '/technologies.png';
export const result = process.env.REACT_APP_PUBLIC_URL + '/result.png';
export const why = process.env.REACT_APP_PUBLIC_URL + '/why.png';
export const who = process.env.REACT_APP_PUBLIC_URL + '/who.png';
export const notFound = process.env.REACT_APP_PUBLIC_URL + '/not-found.png';

export const ogSpa = process.env.REACT_APP_PUBLIC_URL + '/og-spa.jpg';
export const ogProblem = process.env.REACT_APP_PUBLIC_URL + '/og-problem.jpg';
export const ogTask = process.env.REACT_APP_PUBLIC_URL + '/og-task.jpg';
export const ogSolution = process.env.REACT_APP_PUBLIC_URL + '/og-solution.jpg';
export const ogTechnologies = process.env.REACT_APP_PUBLIC_URL + '/og-technologies.jpg';
export const ogResult = process.env.REACT_APP_PUBLIC_URL + '/og-result.jpg';
export const ogWhy = process.env.REACT_APP_PUBLIC_URL + '/og-why.jpg';
export const ogWho = process.env.REACT_APP_PUBLIC_URL + '/og-who.jpg';
export const ogNotFound = process.env.REACT_APP_PUBLIC_URL + '/og-not-found.jpg';

export const spaDark = process.env.REACT_APP_PUBLIC_URL + '/spa-dark.png';
export const problemDark = process.env.REACT_APP_PUBLIC_URL + '/problem-dark.png';
export const taskDark = process.env.REACT_APP_PUBLIC_URL + '/task-dark.png';
export const solutionDark = process.env.REACT_APP_PUBLIC_URL + '/solution-dark.png';
export const technologiesDark = process.env.REACT_APP_PUBLIC_URL + '/technologies-dark.png';
export const resultDark = process.env.REACT_APP_PUBLIC_URL + '/result-dark.png';
export const whyDark = process.env.REACT_APP_PUBLIC_URL + '/why-dark.png';
export const whoDark = process.env.REACT_APP_PUBLIC_URL + '/who-dark.png';
export const notFoundDark = process.env.REACT_APP_PUBLIC_URL + '/not-found-dark.png';

export const ogSpaDark = process.env.REACT_APP_PUBLIC_URL + '/og-spa-dark.jpg';
export const ogProblemDark = process.env.REACT_APP_PUBLIC_URL + '/og-problem-dark.jpg';
export const ogTaskDark = process.env.REACT_APP_PUBLIC_URL + '/og-task-dark.jpg';
export const ogSolutionDark = process.env.REACT_APP_PUBLIC_URL + '/og-solution-dark.jpg';
export const ogTechnologiesDark = process.env.REACT_APP_PUBLIC_URL + '/og-technologies-dark.jpg';
export const ogResultDark = process.env.REACT_APP_PUBLIC_URL + '/og-result-dark.jpg';
export const ogWhyDark = process.env.REACT_APP_PUBLIC_URL + '/og-why-dark.jpg';
export const ogWhoDark = process.env.REACT_APP_PUBLIC_URL + '/og-who-dark.jpg';
export const ogNotFoundDark = process.env.REACT_APP_PUBLIC_URL + '/og-not-found-dark.jpg';

export const languageIconRu = process.env.REACT_APP_PUBLIC_URL + '/language-ru.png';
export const languageIconEn = process.env.REACT_APP_PUBLIC_URL + '/language-en.png';

export const themeIconDark = process.env.REACT_APP_PUBLIC_URL + '/theme-icon-dark.png';
export const themeIconLight = process.env.REACT_APP_PUBLIC_URL + '/theme-icon-light.png';