import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PostsLayout from "./layouts/PostsLayout";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import withRedux from "./hoc/withRedux";
import withRouter from "./hoc/withRouter";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/auth' component={AuthLayout} />
                <ProtectedRoute path='/posts/:id?' component={PostsLayout} />
                <Redirect from='*' to='/' />
            </Switch>
            </>
    );
}
const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
