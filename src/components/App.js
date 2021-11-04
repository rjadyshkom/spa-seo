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
                        subtitle={spa.description}/>
                </Route>
                <Route path={problem.link}>
                    <Article
                        title={problem.title}
                        subtitle={problem.description}/>
                </Route>
                <Route path={task.link}>
                    <Article
                        title={task.title}
                        subtitle={task.description}/>
                </Route>
                <Route path={solution.link}>
                    <Article
                        title={solution.title}
                        subtitle={solution.description}/>
                </Route>
                <Route path={technologies.link}>
                    <Links title={technologies.title}
                           data={repos}
                    />
                </Route>
                <Route path={result.link}>
                    <Article
                        title={result.title}
                        subtitle={result.description}/>
                </Route>
                <Route path={why.link}>
                    <Article
                        title={why.title}
                        subtitle={why.description}/>
                </Route>
                <Route path={who.link}>
                    <Links
                        title={who.title}
                        data={authors}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;