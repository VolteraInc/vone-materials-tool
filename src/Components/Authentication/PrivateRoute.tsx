import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "./AuthContext";

const PrivateRoute: React.ComponentType<any> = ({
  component: Component,
  ...rest
}) => {
  // const { currentUser }: any = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        {/**
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
         */}
        return (
          <Component {...props} />
        );
      }}
    ></Route>
  );
};
export default PrivateRoute;
