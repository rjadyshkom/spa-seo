import React, {useEffect, useState} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Header from "./Header";
import Article from "./Article";
import Links from "./Links";
import content from "../data/content";
import repos from "../data/repos";
import authors from "../data/authors";
import useVH from "react-vh";

function App() {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location);
    const [fade, setFade] = useState('fade_direction_in');
    const [spa, problem, task, solution, technologies, result, why, who, notFound] = content;

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
                        />
                    </Route>

                    <Route path={problem.link}>
                        <Article
                            title={problem.title}
                            subtitle={problem.description}
                            keywords={problem.keywords}
                            emoji={problem.image}
                            favicon={problem.image}
                        />
                    </Route>

                    <Route path={task.link}>
                        <Article
                            title={task.title}
                            subtitle={task.description}
                            keywords={task.keywords}
                            emoji={task.image}
                            favicon={task.image}
                        />
                    </Route>

                    <Route path={solution.link}>
                        <Article
                            title={solution.title}
                            subtitle={solution.description}
                            keywords={solution.keywords}
                            emoji={solution.image}
                            favicon={solution.image}
                        />
                    </Route>

                    <Route path={technologies.link}>
                        <Links title={technologies.title}
                               data={repos}
                               subtitle={technologies.description}
                               keywords={technologies.keywords}
                               emoji={technologies.image}
                               favicon={technologies.image}
                        />
                    </Route>

                    <Route path={result.link}>
                        <Article
                            title={result.title}
                            subtitle={result.description}
                            keywords={result.keywords}
                            emoji={result.image}
                            favicon={result.image}
                        />
                    </Route>

                    <Route path={why.link}>
                        <Article
                            title={why.title}
                            subtitle={why.description}
                            keywords={why.keywords}
                            emoji={why.image}
                            favicon={why.image}
                        />
                    </Route>

                    <Route path={who.link}>
                        <Links
                            title={who.title}
                            data={authors}
                            subtitle={who.description}
                            keywords={who.keywords}
                            emoji={who.image}
                            favicon={who.image}
                        />
                    </Route>

                    <Route path='*'>
                        <Article
                            title={notFound.title}
                            subtitle={notFound.description}
                            keywords={notFound.keywords}
                            emoji={notFound.image}
                            favicon={notFound.image}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;