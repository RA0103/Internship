import React, { useState } from "react";
import Footer from "../Footer";
import { Container, Info, Wrapper } from "./styles";
import { Input, Button, Checkbox } from "../Generic";
import { useMutation } from "react-query";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { REACT_APP_BASE_URL: url } = process.env;

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        'Content-type': 'Application/json'
      }, 
      body: JSON.stringify({
        email,
        password
      })
    }).then((res) => res.json())
  });

  const onSubmit = () => {
    console.log(email, password);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <div className='title'>Sign In</div>
          <Input
            onChange={({ target: { value } }) => setEmail(value)}
            value={email}
            width={"100%"}
            style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
            mt={60}
            placeholder={"Email"}
          />
          <Input
            onChange={({ target: { value } }) => setPassword(value)}
            value={password}
            style={{ border: "none", borderBottom: "1px solid #E6E9EC" }}
            mt={40}
            placeholder={"Password"}
          />
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
