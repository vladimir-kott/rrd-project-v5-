import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "./User";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./UserList";
import Edit from "./Edit";

const UserListLayOut = () => {


    const Users = [
        {
            key: 'user_1',
            name: 'ivan',
            id: 1
        },
        {
            key: 'user_2',
            name: 'saha',
            id: 2
        },
        {
            key: 'user_3',
            name: 'oleh',
            id: 3
        }
    ]

    let { path } = useRouteMatch();

    return ( 
            <Switch>
                <Route path={path + "/edit"} component={Edit} />
                <Route path={path + "/:id"} component={User} />
                <Route exact path={path} component={UserList} />
                <Redirect from='/*' to={path} />
            </Switch>
     );
}
 
export default UserListLayOut;