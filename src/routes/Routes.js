import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from '~/pages/_layouts/auth';

export default function Routes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
}
