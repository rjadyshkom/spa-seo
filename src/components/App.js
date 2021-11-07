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
    const [fade, setFade] = useState('fade_direction_in');
    const {spa, problem, task, solution, technologies, result, why, who, notFound} = content;

    useEffect(() => {
        if (location !== currentLocation) setFade('fade_direction_out');
    }, [location, currentLocation]);

    useVH();
    return (
        <>
            <Header/>
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
                            emoji={spa.image}
                            favicon={spa.image}
                            ogImage={spa.ogImage}
                            canonical={spa.link}
                        />
                    </Route>

                    <Route exact path={problem.link}>
                        <Article
                            title={problem.title}
                            subtitle={problem.description}
                            keywords={problem.keywords}
                            emoji={problem.image}
                            favicon={problem.image}
                            ogImage={problem.ogImage}
                            canonical={problem.link}
                        />
                    </Route>

                    <Route exact path={task.link}>
                        <Article
                            title={task.title}
                            subtitle={task.description}
                            keywords={task.keywords}
                            emoji={task.image}
                            favicon={task.image}
                            ogImage={task.ogImage}
                            canonical={task.link}
                        />
                    </Route>

                    <Route exact path={solution.link}>
                        <Article
                            title={solution.title}
                            subtitle={solution.description}
                            keywords={solution.keywords}
                            emoji={solution.image}
                            favicon={solution.image}
                            ogImage={solution.ogImage}
                            canonical={solution.link}

                        />
                    </Route>

                    <Route exact path={technologies.link}>
                        <Links title={technologies.title}
                               data={repos}
                               subtitle={technologies.description}
                               keywords={technologies.keywords}
                               emoji={technologies.image}
                               favicon={technologies.image}
                               ogImage={technologies.ogImage}
                               canonical={technologies.link}
                        />
                    </Route>

                    <Route exact path={result.link}>
                        <Article
                            title={result.title}
                            subtitle={result.description}
                            keywords={result.keywords}
                            emoji={result.image}
                            favicon={result.image}
                            ogImage={result.ogImage}
                            canonical={result.link}
                        />
                    </Route>

                    <Route exact path={why.link}>
                        <Article
                            title={why.title}
                            subtitle={why.description}
                            keywords={why.keywords}
                            emoji={why.image}
                            favicon={why.image}
                            ogImage={why.ogImage}
                            canonical={why.link}
                        />
                    </Route>

                    <Route exact path={who.link}>
                        <Links
                            title={who.title}
                            data={authors}
                            subtitle={who.description}
                            keywords={who.keywords}
                            emoji={who.image}
                            favicon={who.image}
                            ogImage={who.ogImage}
                            canonical={who.link}
                        />
                    </Route>

                    <Route path={notFound.link}>
                        <Article
                            title={notFound.title}
                            subtitle={notFound.description}
                            keywords={notFound.keywords}
                            emoji={notFound.image}
                            favicon={notFound.image}
                            ogImage={notFound.ogImage}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;