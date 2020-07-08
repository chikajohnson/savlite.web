import React from 'react';
import { Route, Redirect } from 'react-router';
import agent from '../agent';

const AnonymousRoute = ({ children, ...rest }) => {
  console.log("in anonymous " + agent.Auth.isAuth())
  if (!agent.Auth.isAuth()) {
    console.log("not authenticated")
    return <Route {...rest} >{children}</Route>
  }
  else {
    console.log("redirect to home")
    return <Redirect to={{ pathname: "/dashboard" }} />
  }
}

export default AnonymousRoute;