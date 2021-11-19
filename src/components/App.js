import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {Header} from './Header';
import {Article} from './Article';
import {Links} from './Links';
import {TranslationContext, translations} from '../contexts/TranslationContext';
import {content} from '../data/content';
import {reposRu, reposEn, authorsRu, authorsEn} from '../utils/constants';
import {routes} from '../data/routes';
import useVH from 'react-vh';

function App() {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location);
    const [language, setLanguage] = useState('ru');
    const [theme, setTheme] = useState('light');
    const [fade, setFade] = useState('fade_direction_in');
    const {spa, problem, task, solution, technologies, result, why, who, notFound} = content;

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
        else
            setLanguage('en')
    }


    useEffect(() => {
        if (location !== currentLocation) setFade('fade_direction_out');
    }, [location, currentLocation]);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e => handleThemeChange(e.matches ? 'dark' : 'light'));

        handleThemeChange(window.matchMedia('(prefers-color-scheme: dark)')
            .matches ? 'dark' : 'light')

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
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
                            title={translations[language].spa.title}
                            subtitle={translations[language].spa.description}
                            keywords={spa.keywords}
                            emoji={theme === 'light' ? spa.darkImage : spa.image}
                            favicon={theme === 'light' ? spa.darkImage : spa.image}
                            ogImage={theme === 'light' ? spa.ogImage : spa.darkOgImage}
                            canonical={spa.link}
                        />
                    </Route>

                    <Route exact path={routes.problem}>
                        <Article
                            title={translations[language].problem.title}
                            subtitle={translations[language].problem.description}
                            keywords={problem.keywords}
                            emoji={theme === 'light' ? problem.darkImage : problem.image}
                            favicon={theme === 'light' ? problem.darkImage : problem.image}
                            ogImage={theme === 'light' ? problem.ogImage : problem.darkOgImage}
                            canonical={problem.link}
                        />
                    </Route>

                    <Route exact path={routes.task}>
                        <Article
                            title={translations[language].task.title}
                            subtitle={translations[language].task.description}
                            keywords={task.keywords}
                            emoji={theme === 'light' ? task.darkImage : task.image}
                            favicon={theme === 'light' ? task.darkImage : task.image}
                            ogImage={theme === 'light' ? task.ogImage : task.darkOgImage}
                            canonical={task.link}
                        />
                    </Route>

                    <Route exact path={routes.solution}>
                        <Article
                            title={translations[language].solution.title}
                            subtitle={translations[language].solution.description}
                            keywords={solution.keywords}
                            emoji={theme === 'light' ? solution.darkImage : solution.image}
                            favicon={theme === 'light' ? solution.darkImage : solution.image}
                            ogImage={theme === 'light' ? solution.ogImage : solution.darkOgImage}
                            canonical={solution.link}

                        />
                    </Route>

                    <Route exact path={routes.technologies}>
                        <Links title={translations[language].technologies.title}
                               data={language === 'ru' ? reposRu : reposEn}
                               subtitle={technologies.description}
                               keywords={technologies.keywords}
                               emoji={theme === 'light' ? technologies.darkImage : technologies.image}
                               favicon={theme === 'light' ? technologies.darkImage : technologies.image}
                               ogImage={theme === 'light' ? technologies.ogImage : technologies.darkOgImage}
                               canonical={technologies.link}
                        />
                    </Route>

                    <Route exact path={routes.result}>
                        <Article
                            title={translations[language].result.title}
                            subtitle={translations[language].result.description}
                            keywords={result.keywords}
                            emoji={theme === 'light' ? result.darkImage : result.image}
                            favicon={theme === 'light' ? result.darkImage : result.image}
                            ogImage={theme === 'light' ? result.ogImage : result.darkOgImage}
                            canonical={result.link}
                        />
                    </Route>

                    <Route exact path={routes.why}>
                        <Article
                            title={translations[language].why.title}
                            subtitle={translations[language].why.description}
                            keywords={why.keywords}
                            emoji={theme === 'light' ? why.darkImage : why.image}
                            favicon={theme === 'light' ? why.darkImage : why.image}
                            ogImage={theme === 'light' ? why.ogImage : why.darkOgImage}
                            canonical={why.link}
                        />
                    </Route>

                    <Route exact path={routes.who}>
                        <Links
                            title={translations[language].who.title}
                            data={language === 'ru' ? authorsRu : authorsEn}
                            subtitle={who.description}
                            keywords={who.keywords}
                            emoji={theme === 'light' ? who.darkImage : who.image}
                            favicon={theme === 'light' ? who.darkImage : who.image}
                            ogImage={theme === 'light' ? who.ogImage : who.darkOgImage}
                            canonical={who.link}
                        />
                    </Route>

                    <Route>
                        <Article
                            title={translations[language].notFound.title}
                            subtitle={translations[language].notFound.description}
                            keywords={notFound.keywords}
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