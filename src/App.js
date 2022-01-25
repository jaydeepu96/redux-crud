import React, { useState } from 'react';
import './App.css';
import PublicRoute from './protectedRoutes/PublicRoute'
import PrivateRoute from './protectedRoutes/PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login/Login';
import Topbar from './topbar/Topbar';
import CreateTask from './task/CreateTask';
import EditTask from './task/EditTask';
import ViewTask from './task/ViewTask';
import Jokes from './jokes/Jokes';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Topbar />
        <div className="container-fluid">
          <Switch>
            <PublicRoute restricted={true} component={Login} path="/Login" />
            <PrivateRoute component={CreateTask} path="/CreateTask" exact />
            <PrivateRoute component={EditTask} path="/EditTask" exact />
            <PrivateRoute component={ViewTask} path="/ViewTasks" exact />
            <PrivateRoute component={Jokes} path="/jokes" exact />

          </Switch>
        </div>



      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
