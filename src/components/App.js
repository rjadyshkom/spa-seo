import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import TextContent from "./TextContent";
import {texts} from "../data/texts";
import links from "../data/links";

function App() {
    const {spa, problem, solution, technologies, result, why} = texts;
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={links.home}>
                    <TextContent
                        title={spa.title}
                        subtitle={spa.subtitle}/>
                </Route>
                <Route path={links.problem}>
                    <TextContent
                        title={problem.title}
                        subtitle={problem.subtitle}/>
                </Route>
                <Route path={links.solution}>
                    <TextContent
                        title={solution.title}
                        subtitle={solution.subtitle}/>
                </Route>
                <Route path={links.technologies}>
                    <TextContent
                        title={technologies.title}
                        subtitle={technologies.subtitle}/>
                </Route>
                <Route path={links.result}>
                    <TextContent
                        title={result.title}
                        subtitle={result.subtitle}/>
                </Route>
                <Route path={links.why}>
                    <TextContent
                        title={why.title}
                        subtitle={why.subtitle}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;
