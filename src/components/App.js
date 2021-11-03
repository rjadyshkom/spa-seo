import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Article from "./Article";
import Technologies from "./Technologies";
import links from "../data/links";
import titles from "../data/titles";
import descriptions from "../data/descriptions";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={links.home}>
                    <Article
                        title={titles.spa}
                        subtitle={descriptions.spa}/>
                </Route>
                <Route path={links.problem}>
                    <Article
                        title={titles.problem}
                        subtitle={descriptions.problem}/>
                </Route>
                <Route path={links.task}>
                    <Article
                        title={titles.task}
                        subtitle={descriptions.task}/>
                </Route>
                <Route path={links.solution}>
                    <Article
                        title={titles.solution}
                        subtitle={descriptions.solution}/>
                </Route>
                <Route path={links.technologies}>
                    <Technologies title={titles.technologies}/>
                </Route>
                <Route path={links.result}>
                    <Article
                        title={titles.result}
                        subtitle={descriptions.result}/>
                </Route>
                <Route path={links.why}>
                    <Article
                        title={titles.why}
                        subtitle={descriptions.why}/>
                </Route>
                <Route path={links.who}>
                    <Article
                        title={titles.who}
                        subtitle={descriptions.who}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;