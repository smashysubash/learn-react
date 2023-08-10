import React, { useState } from "react";
import style from "./style.module.css";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: "95vh" }}
    >
      <div className="border bg-light rounded" style={{ width: "350px" }}>
        <Form
          className="p-3"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h3 className="p-3 d-flex justify-content-center">SIGNUP</h3>
          <FloatingLabel
            className="m-3"
            controlId="floatingInput"
            label="Email address"
          >
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            className="m-3"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </FloatingLabel>
          <FloatingLabel
            className="m-3"
            controlId="floatingPassword"
            label="Re-type Password"
          >
            <Form.Control
              type="password"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
              placeholder="Re-type Password"
            />
          </FloatingLabel>
          <Button className="m-3" style={{ width: "285px" }} type="submit">
            Submit form
          </Button>
          <Link
            to="/login"
            className="m-3"
            style={{ position: "relative", right: "-140px" }}
          >
            Already have account?
          </Link>
        </Form>
      </div>
    </Container>
  );
};
