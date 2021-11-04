import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Article from "./Article";
import Links from "./Links";
import routes from "../data/routes";
import titles from "../data/titles";
import descriptions from "../data/descriptions";
import links from "../data/links";
import authors from "../data/authors";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={routes.home}>
                    <Article
                        title={titles.spa}
                        subtitle={descriptions.spa}/>
                </Route>
                <Route path={routes.problem}>
                    <Article
                        title={titles.problem}
                        subtitle={descriptions.problem}/>
                </Route>
                <Route path={routes.task}>
                    <Article
                        title={titles.task}
                        subtitle={descriptions.task}/>
                </Route>
                <Route path={routes.solution}>
                    <Article
                        title={titles.solution}
                        subtitle={descriptions.solution}/>
                </Route>
                <Route path={routes.technologies}>
                    <Links title={titles.technologies}
                           data={links}
                    />
                </Route>
                <Route path={routes.result}>
                    <Article
                        title={titles.result}
                        subtitle={descriptions.result}/>
                </Route>
                <Route path={routes.why}>
                    <Article
                        title={titles.why}
                        subtitle={descriptions.why}/>
                </Route>
                <Route path={routes.who}>
                    <Links
                        title={titles.who}
                        data={authors}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;