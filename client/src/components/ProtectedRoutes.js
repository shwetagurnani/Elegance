import React from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "./context/Auth";

export default function ProtectedRoutes({ children, ...rest }) {
  const auth = React.useContext(authContext).state;
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/patientlogin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
