import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "react-toastify/dist/ReactToastify.css";
import UserListLayOut from "./pages/UserListLayOut";

function App() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col">
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/users/:id?' component={UserListLayOut}/>
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    );
}

export default App;
