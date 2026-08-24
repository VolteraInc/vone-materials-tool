import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../Main.scss";

const googlelogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png";
interface FormData {
  email: any;
  password: any;
}

const Login: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, googlelogin }: any = useAuth();
  const history = useHistory();

  async function onSubmit() {
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current?.value, passwordRef.current?.value);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
    history.push("/");
  }
  async function loginwithGoogle() {
    try {
      setError("");
      setLoading(true);
      await googlelogin();
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
    history.push("/");
  }
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Form.Group className="align-center">
              <Button
                className="align-center"
                variant="outline-primary"
                onClick={loginwithGoogle}
                block
              >
                <img
                  className="align-left"
                  width="20px"
                  height="18px"
                  src={googlelogo}
                  alt="Google Logo"
                />
                Sign In with Google
              </Button>
            </Form.Group>
            <div className="text-center">or</div>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className="w-100 text-center mt-3">Forgot Password?</div>
        <div className="w-100 text-center mt-2">
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Login;
