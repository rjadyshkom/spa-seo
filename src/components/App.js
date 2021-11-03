import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import TextContent from "./TextContent";
import texts from "../data/texts";
import links from "../data/links";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={links.home}>
                    <TextContent
                        title={texts.spa.title}
                        subtitle={texts.spa.subtitle}/>
                </Route>
                <Route path={links.problem}>
                    <TextContent
                        title={texts.problem.title}
                        subtitle={texts.problem.subtitle}/>
                </Route>
                <Route path={links.solution}>
                    <TextContent
                        title={texts.solution.title}
                        subtitle={texts.solution.subtitle}/>
                </Route>
                <Route path={links.technologies}>
                    <TextContent
                        title={texts.technologies.title}
                        subtitle={texts.technologies.subtitle}/>
                </Route>
                <Route path={links.why}>
                    <TextContent
                        title={texts.why.title}
                        subtitle={texts.why.subtitle}/>
                </Route>
            </Switch>

        </>
    );
}

export default App;
