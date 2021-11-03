import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import TextContent from "./TextContent";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <TextContent
                        title='SPA'
                        subtitle='SPA (Single Page Application) - это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.'/>
                </Route>
            </Switch>

        </>
    );
}

export default App;
