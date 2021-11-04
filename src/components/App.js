import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Article from "./Article";
import Links from "./Links";
import content from "../data/content";
import repos from "../data/repos";
import authors from "../data/authors";

function App() {
    const [spa, problem, task, solution, technologies, result, why, who] = content;
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={spa.link}>
                    <Article
                        title={spa.title}
                        subtitle={spa.description}
                        keywords={spa.keywords}
                        emoji={spa.emoji}/>
                </Route>
                <Route path={problem.link}>
                    <Article
                        title={problem.title}
                        subtitle={problem.description}
                        keywords={problem.keywords}
                        emoji={problem.emoji}/>
                </Route>
                <Route path={task.link}>
                    <Article
                        title={task.title}
                        subtitle={task.description}
                        keywords={task.keywords}
                        emoji={task.emoji}/>
                </Route>
                <Route path={solution.link}>
                    <Article
                        title={solution.title}
                        subtitle={solution.description}
                        keywords={solution.keywords}
                        emoji={solution.emoji}/>
                </Route>
                <Route path={technologies.link}>
                    <Links title={technologies.title}
                           data={repos}
                           subtitle={technologies.description}
                           keywords={technologies.keywords}
                           emoji={technologies.emoji}/>
                </Route>
                <Route path={result.link}>
                    <Article
                        title={result.title}
                        subtitle={result.description}
                        keywords={result.keywords}
                        emoji={result.emoji}/>
                </Route>
                <Route path={why.link}>
                    <Article
                        title={why.title}
                        subtitle={why.description}
                        keywords={why.keywords}
                        emoji={why.emoji}/>
                </Route>
                <Route path={who.link}>
                    <Links
                        title={who.title}
                        data={authors}
                        subtitle={who.description}
                        keywords={who.keywords}
                        emoji={who.emoji}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;