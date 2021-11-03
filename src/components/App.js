import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import TextContent from "./TextContent";
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
                    <TextContent
                        title={titles.spa}
                        subtitle={descriptions.spa}/>
                </Route>
                <Route path={links.problem}>
                    <TextContent
                        title={titles.problem}
                        subtitle={descriptions.problem}/>
                </Route>
                <Route path={links.task}>
                    <TextContent
                        title={titles.task}
                        subtitle={descriptions.task}/>
                </Route>
                <Route path={links.solution}>
                    <TextContent
                        title={titles.solution}
                        subtitle={descriptions.solution}/>
                </Route>
                <Route path={links.technologies}>
                    <Technologies title={titles.technologies}/>
                </Route>
                <Route path={links.result}>
                    <TextContent
                        title={titles.result}
                        subtitle={descriptions.result}/>
                </Route>
                <Route path={links.why}>
                    <TextContent
                        title={titles.why}
                        subtitle={descriptions.why}/>
                </Route>
                <Route path={links.who}>
                    <TextContent
                        title={titles.who}
                        subtitle={descriptions.who}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;