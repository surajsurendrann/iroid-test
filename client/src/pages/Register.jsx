import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import openEye from "../assets/eye.gif";
import sleepingEye from "../assets/sleep.gif";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPassworType] = useState("password");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await register(username, email, password);
      setUsername(null);
      setEmail(null);
      setPassword(null);
      setIsLoading(false);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Sign up successfull",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/home");
    } catch (error) {}
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
          <span>Already have an account?</span>
          <Link to="/">
            <Button>Login</Button>
          </Link>
        </TopContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Header>
              <span style={{ fontWeight: "bold" }}>Let's Go</span>
            </Header>

            <FormGroup>
              <Label>Fullname</Label>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <InputContainer>
                <PasswordInput
                  type={passwordType}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
            <Button type="submit" disabled={isLoading}>
              Sign up
            </Button>
          </Form>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default Register;

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
  margin: 0px 20px 50px 0px;
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
const Input = styled.input`
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 1px 1px 3px grey;
  height: 25px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0px;
  border: none;
  border-radius: 15px;
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

const Img = styled.img`
  height: 100%;
`;
