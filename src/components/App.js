import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {Header} from './Header';
import {Article} from './Article';
import {Links} from './Links';
import {content} from '../data/content';
import {repos, authors} from '../utils/constants';
import useVH from 'react-vh';

function App() {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location);
    const [theme, setTheme] = useState('light');
    const [fade, setFade] = useState('fade_direction_in');
    const {spa, problem, task, solution, technologies, result, why, who, notFound} = content;

    function handleThemeChange(theme) {
        setTheme(theme)
        if (theme === 'dark')
            document.body.classList.add('root_dark')
        else
            document.body.classList.remove('root_dark')
    }

    useEffect(() => {
        if (location !== currentLocation) setFade('fade_direction_out');
    }, [location, currentLocation]);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => handleThemeChange(e.matches ? 'dark' : 'light'));
        handleThemeChange(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, []);


    useVH();
    return (
        <>
            <Header
                darkTheme={theme}
                onThemeChange={handleThemeChange}
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
                    <Route exact path={spa.link}>
                        <Article
                            title={spa.title}
                            subtitle={spa.description}
                            keywords={spa.keywords}
                            emoji={theme === 'light' ? spa.darkImage : spa.image}
                            favicon={theme === 'light' ? spa.darkImage : spa.image}
                            ogImage={theme === 'light' ? spa.darkOgImage : spa.ogImage}
                            canonical={spa.link}
                        />
                    </Route>

                    <Route exact path={problem.link}>
                        <Article
                            title={problem.title}
                            subtitle={problem.description}
                            keywords={problem.keywords}
                            emoji={theme === 'light' ? problem.darkImage : problem.image}
                            favicon={theme === 'light' ? problem.darkImage : problem.image}
                            ogImage={theme === 'light' ? problem.darkOgImage : problem.ogImage}
                            canonical={problem.link}
                        />
                    </Route>

                    <Route exact path={task.link}>
                        <Article
                            title={task.title}
                            subtitle={task.description}
                            keywords={task.keywords}
                            emoji={theme === 'light' ? task.darkImage : task.image}
                            favicon={theme === 'light' ? task.darkImage : task.image}
                            ogImage={theme === 'light' ? task.darkOgImage : task.ogImage}
                            canonical={task.link}
                        />
                    </Route>

                    <Route exact path={solution.link}>
                        <Article
                            title={solution.title}
                            subtitle={solution.description}
                            keywords={solution.keywords}
                            emoji={theme === 'light' ? solution.darkImage : solution.image}
                            favicon={theme === 'light' ? solution.darkImage : solution.image}
                            ogImage={theme === 'light' ? solution.darkOgImage : solution.ogImage}
                            canonical={solution.link}

                        />
                    </Route>

                    <Route exact path={technologies.link}>
                        <Links title={technologies.title}
                               data={repos}
                               subtitle={technologies.description}
                               keywords={technologies.keywords}
                               emoji={theme === 'light' ? technologies.darkImage : technologies.image}
                               favicon={theme === 'light' ? technologies.darkImage : technologies.image}
                               ogImage={theme === 'light' ? technologies.darkOgImage : technologies.ogImage}
                               canonical={technologies.link}
                        />
                    </Route>

                    <Route exact path={result.link}>
                        <Article
                            title={result.title}
                            subtitle={result.description}
                            keywords={result.keywords}
                            emoji={theme === 'light' ? result.darkImage : result.image}
                            favicon={theme === 'light' ? result.darkImage : result.image}
                            ogImage={theme === 'light' ? result.darkOgImage : result.ogImage}
                            canonical={result.link}
                        />
                    </Route>

                    <Route exact path={why.link}>
                        <Article
                            title={why.title}
                            subtitle={why.description}
                            keywords={why.keywords}
                            emoji={theme === 'light' ? why.darkImage : why.image}
                            favicon={theme === 'light' ? why.darkImage : why.image}
                            ogImage={theme === 'light' ? why.darkOgImage : why.ogImage}
                            canonical={why.link}
                        />
                    </Route>

                    <Route exact path={who.link}>
                        <Links
                            title={who.title}
                            data={authors}
                            subtitle={who.description}
                            keywords={who.keywords}
                            emoji={theme === 'light' ? who.darkImage : who.image}
                            favicon={theme === 'light' ? who.darkImage : who.image}
                            ogImage={theme === 'light' ? who.darkOgImage : who.ogImage}
                            canonical={who.link}
                        />
                    </Route>

                    <Route path={notFound.link}>
                        <Article
                            title={notFound.title}
                            subtitle={notFound.description}
                            keywords={notFound.keywords}
                            emoji={theme === 'light' ? notFound.darkImage : notFound.image}
                            favicon={theme === 'light' ? notFound.darkImage : notFound.image}
                            ogImage={theme === 'light' ? notFound.darkOgImage : notFound.ogImage}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;