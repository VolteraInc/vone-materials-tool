import { Container } from "react-bootstrap";
import React from "react";
import Main from "./Components/Main";
import Form, { inkProps } from "./Components/Vone/forms/mainForm"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import AuthProvider from "./Components/Authentication/AuthContext";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import ReactDOM from "react-dom";
import defaultValue from "./Components/Vone/defaultValue";
import { Ink } from "@volterainc/utils-ink";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <React.Fragment>
            <PrivateRoute exact path="/" component={Main}></PrivateRoute>
            <PrivateRoute exact path="/Form" render={(props:any) => ReactDOM.render(<Form ink={new Ink(props)} />, document.getElementById('root'))}></PrivateRoute>
             {/* <PrivateRoute exact path="/Form" element={<Form ink={new Ink(defaultValue)} />}></PrivateRoute> */}
            <Container className="d-flex align-items-center justify-content-center">
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Signup}></Route>
            </Container>
          </React.Fragment>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
