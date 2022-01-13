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