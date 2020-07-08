import React from 'react';
import { Route, Redirect } from 'react-router';
import '@pwabuilder/pwainstall'

import agent from '../agent';

const AppNavBar = React.lazy(() => import('./../components/AppNavBar'));

const ProtectedRoute = ({ children, ...rest }) => {
  if (agent.Auth.isAuth()) {
    return (
      <>
       <AppNavBar />
        <Route {...rest} >
          {children}
        </Route>
      </>
    )
  } else {
    return <Redirect to={{ pathname: "/login" }} />
  }
}

export default ProtectedRoute;