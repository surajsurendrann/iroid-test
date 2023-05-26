import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import openEye from "../assets/eye.gif";
import sleepingEye from "../assets/sleep.gif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPassworType] = useState("password");

  const { login } = useContext(UserContext);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(email, password);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login successfull",
        showConfirmButton: false,
        timer: 2000,
      });
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setErr(true);
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    if (showPassword) {
      setPassworType("text");
    } else {
      setPassworType("password");
    }
  }, [showPassword]);

  return (
    <>
      <MainContainer>
        <Circle></Circle>
        <TopContainer>
          <span>Create an account?</span>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </TopContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Header>
              <span style={{ fontWeight: "bold" }}>Welcome Back!</span>
            </Header>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <InputContainer>
                <PasswordInput
                  type={passwordType}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {showPassword ? (
                  <Img
                    src={openEye}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <Img
                    src={sleepingEye}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </InputContainer>
            </FormGroup>

            <RememberMe>
              <input type="checkbox" name="" id="" />
              <label>Remember Me </label>
            </RememberMe>

            <Button type="submit" disabled={isLoading}>
              Login
            </Button>
            <ErrorMsg>
              {err && <span>something went wrong! Refresh </span>}
            </ErrorMsg>
          </Form>
        </FormContainer>

        <BottomContainer>
          <span>
            <a href="">Forgot your password?</a>
          </span>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default Login;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  overflow: hidden;
`;

const Circle = styled.div`
  width: 1200px;
  height: 1250px;
  bottom: -120%;
  z-index: -1;
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(5, 172, 185, 1) 0%,
    rgba(0, 149, 210, 1) 48%,
    rgba(58, 25, 190, 1) 100%
  );
`;

const TopContainer = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 50px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    margin-right: 5px;
  }
`;

const FormContainer = styled.div`
  display: flex;
`;

// Form
const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  padding: 35px 40px;
  box-shadow: 3px 4px 10px grey;
  width: 300px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 5px;
`;
const Label = styled.label`
  margin-bottom: 3px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 1px 1px 3px grey;
  height: 25px;
`;

const PasswordInput = styled.input`
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
`;
const Input = styled.input`
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 1px 1px 3px grey;
  height: 25px;
`;

const Img = styled.img`
  height: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(5, 172, 185, 1) 0%,
    rgba(0, 149, 210, 1) 48%,
    rgba(58, 25, 190, 1) 100%
  );
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transform: scale(102%);
    transition: all ease-in-out 0.2s;
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 3px;

  input {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

const BottomContainer = styled.div`
  margin-top: 30px;
  a {
    color: white;
  }
`;

const ErrorMsg = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;
