import React, { useState } from "react";
import Footer from "../Footer";
import { Container, Error, Info, Wrapper } from "./styles";
import { Input, Button, Checkbox } from "../Generic";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { REACT_APP_BASE_URL: url } = process.env;

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    if (email?.length && password?.length) {
      mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              setError(false);
              localStorage.setItem("token", res?.authenticationToken);
              navigate("/home");
            } else {
              setError("Incorrect Email or Password");
            }
          },
          onError: (err) => {},
        }
      );
    } else {
      setError("Email or Password should not be blank");
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <div wrapper className='title'>
            Sign In
          </div>
          <Input
            onChange={({ target: { value } }) => {
              setError(false);
              setEmail(value);
            }}
            value={email}
            width={"100%"}
            style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
            mt={60}
            placeholder={"Email"}
          />
          <Input
            type={"password"}
            onChange={({ target: { value } }) => {
              setError(false);
              setPassword(value);
            }}
            value={password}
            style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
            mt={40}
            placeholder={"Password"}
          />
          {error.length ? <Error>{error}</Error> : null}
          <Info>
            <Checkbox>Remember me</Checkbox>
            <a href='/signIn'>Forgot</a>
          </Info>
          <Button mt={32} type={"primary"} onClick={onSubmit}>
            Login
          </Button>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
export default SignIn;
