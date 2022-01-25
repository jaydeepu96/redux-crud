import React from 'react';
import { selectLogin } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';




const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const login = useSelector(selectLogin)
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            login === "true" ?
                <Redirect to={{ pathname: "/edit", state: { from: props.location } }} />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;