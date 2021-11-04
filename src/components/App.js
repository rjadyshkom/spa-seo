import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Article from "./Article";
import Links from "./Links";
import content from "../data/content";
import repos from "../data/repos";
import authors from "../data/authors";
import useVH from "react-vh";

function App() {
    const [spa, problem, task, solution, technologies, result, why, who] = content;
    useVH();
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={spa.link}>
                    <Article
                        title={spa.title}
                        subtitle={spa.description}
                        keywords={spa.keywords}
                        emoji={spa.image}
                        favicon={spa.image}/>
                </Route>
                <Route path={problem.link}>
                    <Article
                        title={problem.title}
                        subtitle={problem.description}
                        keywords={problem.keywords}
                        emoji={problem.image}
                        favicon={problem.image}/>
                </Route>
                <Route path={task.link}>
                    <Article
                        title={task.title}
                        subtitle={task.description}
                        keywords={task.keywords}
                        emoji={task.image}
                        favicon={task.image}/>
                </Route>
                <Route path={solution.link}>
                    <Article
                        title={solution.title}
                        subtitle={solution.description}
                        keywords={solution.keywords}
                        emoji={solution.image}
                        favicon={solution.image}/>
                </Route>
                <Route path={technologies.link}>
                    <Links title={technologies.title}
                           data={repos}
                           subtitle={technologies.description}
                           keywords={technologies.keywords}
                           emoji={technologies.image}
                           favicon={technologies.image}/>
                </Route>
                <Route path={result.link}>
                    <Article
                        title={result.title}
                        subtitle={result.description}
                        keywords={result.keywords}
                        emoji={result.image}
                        favicon={result.image}/>
                </Route>
                <Route path={why.link}>
                    <Article
                        title={why.title}
                        subtitle={why.description}
                        keywords={why.keywords}
                        emoji={why.image}
                        favicon={why.image}/>
                </Route>
                <Route path={who.link}>
                    <Links
                        title={who.title}
                        data={authors}
                        subtitle={who.description}
                        keywords={who.keywords}
                        emoji={who.image}
                        favicon={who.image}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;