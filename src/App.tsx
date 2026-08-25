import { Container } from "react-bootstrap";
import Main from "./Components/Main";
import Form from "./Components/Vone/forms/mainForm"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import AuthProvider from "./Components/Authentication/AuthContext";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import ReactDOM from "react-dom";
import { Ink } from "@volterainc/utils-ink";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            render={() => (
              <Main
                sidebarOpen={sidebarOpen}
                onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
              />
            )}
          ></PrivateRoute>
          <PrivateRoute exact path="/Form" render={(props:any) => ReactDOM.render(<Form ink={new Ink(props)} />, document.getElementById('root'))}></PrivateRoute>
          {/* <PrivateRoute exact path="/Form" element={<Form ink={new Ink(defaultValue)} />}></PrivateRoute> */}
          <Route exact path="/login" render={() => (
            <Container className="d-flex align-items-center justify-content-center">
              <Login />
            </Container>
          )}></Route>
          <Route exact path="/signup" render={() => (
            <Container className="d-flex align-items-center justify-content-center">
              <Signup />
            </Container>
          )}></Route>
          <Route
            render={() => (
              <Main
                notFound
                sidebarOpen={sidebarOpen}
                onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
              />
            )}
          ></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
