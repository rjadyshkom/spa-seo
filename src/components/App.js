import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {Header} from './Header';
import {Article} from './Article';
import {Links} from './Links';
import {Contacts} from './Contacts';
import {TranslationContext, translations} from '../contexts/TranslationContext';
import {images} from '../data/images';
import {systemLanguage} from '../utils/constants';
import {routes} from '../data/routes';
import useVH from 'react-vh';

function App() {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location);
    const [language, setLanguage] = useState('ru');
    const [theme, setTheme] = useState('light');
    const [fade, setFade] = useState('fade_direction_in');
    const {spa, problem, task, solution, technologies, result, why, who, notFound} = images;

    useVH();

    function handleThemeChange(theme) {
        setTheme(theme)
        if (theme === 'dark')
            document.body.classList.add('root_dark')
        else
            document.body.classList.remove('root_dark')
    }

    function handleLanguageChange(language) {
        setLanguage(language)
        if (language !== 'ru')
            setLanguage('ru')
        else setLanguage('en')
    }

    useEffect(() => {
        if (location !== currentLocation) setFade('fade_direction_out');
    }, [location, currentLocation]);

    useEffect(() => {
        if (language !== systemLanguage) {
            window.addEventListener('languagechange', () => {
                    setLanguage(systemLanguage)
                }
            )
            return () => window.removeEventListener('languagechange', () => {
            })
        }
    }, [language]);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e => handleThemeChange(e.matches ? 'dark' : 'light'));

        handleThemeChange(window.matchMedia('(prefers-color-scheme: dark)')
            .matches ? 'dark' : 'light')

        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
        });
    }, []);

    return (
        <TranslationContext.Provider value={translations[language]}>
            <Header
                onThemeChange={handleThemeChange}
                onLanguageSelect={handleLanguageChange}
                theme={theme}
                language={language}
            />
            <div
                className={`fade ${fade}`}
                onAnimationEnd={() => {
                    if (fade === 'fade_direction_out') {
                        setFade('fade_direction_in');
                        setCurrentLocation(location);
                    }
                }}
            >
                <Switch location={currentLocation}>
                    <Route exact path={routes.spa}>
                        <Article
                            language={language}
                            title={translations[language].spa.title}
                            subtitle={translations[language].spa.description}
                            keywords={translations[language].spa.keywords}
                            emoji={theme === 'light' ? spa.darkImage : spa.image}
                            favicon={theme === 'light' ? spa.darkImage : spa.image}
                            ogImage={theme === 'light' ? spa.ogImage : spa.darkOgImage}
                            canonical={routes.spa}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.problem}>
                        <Article
                            language={language}
                            title={translations[language].problem.title}
                            subtitle={translations[language].problem.description}
                            keywords={translations[language].problem.keywords}
                            emoji={theme === 'light' ? problem.darkImage : problem.image}
                            favicon={theme === 'light' ? problem.darkImage : problem.image}
                            ogImage={theme === 'light' ? problem.ogImage : problem.darkOgImage}
                            canonical={routes.problem}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.task}>
                        <Article
                            language={language}
                            title={translations[language].task.title}
                            subtitle={translations[language].task.description}
                            keywords={translations[language].task.keywords}
                            emoji={theme === 'light' ? task.darkImage : task.image}
                            favicon={theme === 'light' ? task.darkImage : task.image}
                            ogImage={theme === 'light' ? task.ogImage : task.darkOgImage}
                            canonical={routes.task}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.solution}>
                        <Article
                            language={language}
                            title={translations[language].solution.title}
                            subtitle={translations[language].solution.description}
                            keywords={translations[language].solution.keywords}
                            emoji={theme === 'light' ? solution.darkImage : solution.image}
                            favicon={theme === 'light' ? solution.darkImage : solution.image}
                            ogImage={theme === 'light' ? solution.ogImage : solution.darkOgImage}
                            canonical={routes.solution}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.technologies}>
                        <Links
                            language={language}
                            title={translations[language].technologies.title}
                            data={translations[language].repos}
                            subtitle={translations[language].technologies.description}
                            keywords={translations[language].technologies.keywords}
                            emoji={theme === 'light' ? technologies.darkImage : technologies.image}
                            favicon={theme === 'light' ? technologies.darkImage : technologies.image}
                            ogImage={theme === 'light' ? technologies.ogImage : technologies.darkOgImage}
                            canonical={routes.technologies}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.result}>
                        <Article
                            language={language}
                            title={translations[language].result.title}
                            subtitle={translations[language].result.description}
                            keywords={translations[language].result.keywords}
                            emoji={theme === 'light' ? result.darkImage : result.image}
                            favicon={theme === 'light' ? result.darkImage : result.image}
                            ogImage={theme === 'light' ? result.ogImage : result.darkOgImage}
                            canonical={routes.result}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.why}>
                        <Article
                            language={language}
                            title={translations[language].why.title}
                            subtitle={translations[language].why.description}
                            keywords={translations[language].why.keywords}
                            emoji={theme === 'light' ? why.darkImage : why.image}
                            favicon={theme === 'light' ? why.darkImage : why.image}
                            ogImage={theme === 'light' ? why.ogImage : why.darkOgImage}
                            canonical={routes.why}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.who}>
                        <Links
                            language={language}
                            title={translations[language].who.title}
                            data={translations[language].authors}
                            subtitle={translations[language].who.description}
                            keywords={translations[language].who.keywords}
                            emoji={theme === 'light' ? who.darkImage : who.image}
                            favicon={theme === 'light' ? who.darkImage : who.image}
                            ogImage={theme === 'light' ? who.ogImage : who.darkOgImage}
                            canonical={routes.who}
                            siteName={translations[language].siteName}
                        />
                    </Route>

                    <Route exact path={routes.contacts}>
                        <Contacts
                            labelName={translations[language].form.labels.name}
                            labelEmail={translations[language].form.labels.email}
                            labelMessage={translations[language].form.labels.message}
                            placeholderName={translations[language].form.placeholders.name}
                            placeholderEmail={translations[language].form.placeholders.email}
                            placeholderMessage={translations[language].form.placeholders.message}
                            buttonReset={translations[language].form.buttonNames.reset}
                            buttonSubmit={translations[language].form.buttonNames.submit}
                            validationNameMin={translations[language].form.validationMessages.name.min}
                            validationNameRequired={translations[language].form.validationMessages.name.required}
                            validationEmailMin={translations[language].form.validationMessages.email.min}
                            validationEmailMatches={translations[language].form.validationMessages.email.matches}
                            validationEmailRequired={translations[language].form.validationMessages.email.required}
                            validationMessageMax={translations[language].form.validationMessages.message.max}
                            validationMessageRequired={translations[language].form.validationMessages.message.required}
                            messageSuccess={translations[language].form.messages.success}
                            messageError={translations[language].form.messages.error}
                            language={language}
                            title={translations[language].contacts.title}
                            subtitle={translations[language].contacts.description}
                            keywords={translations[language].contacts.keywords}
                            canonical={routes.contacts}
                            siteName={translations[language].siteName}
                            favicon={theme === 'light' ? notFound.darkImage : notFound.image}
                            ogImage={theme === 'light' ? notFound.ogImage : notFound.darkOgImage}
                        />
                    </Route>

                    <Route>
                        <Article
                            language={language}
                            title={translations[language].notFound.title}
                            subtitle={translations[language].notFound.description}
                            emoji={theme === 'light' ? notFound.darkImage : notFound.image}
                            favicon={theme === 'light' ? notFound.darkImage : notFound.image}
                            ogImage={theme === 'light' ? notFound.ogImage : notFound.darkOgImage}
                        />
                    </Route>
                </Switch>
            </div>
        </TranslationContext.Provider>
    );
}

export default App;