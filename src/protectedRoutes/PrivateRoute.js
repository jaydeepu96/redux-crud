import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { selectLogin } from '../features/user/userSlice'
import { useSelector } from 'react-redux'
const PrivateRoute = ({ component: Component, ...rest }) => {
    const login = useSelector(selectLogin)
    console.log("private", login)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /Login page
        <Route {...rest} render={props => (
            login ?
                <Component {...props} />
                : <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
        )} />
    );
};

export default PrivateRoute;