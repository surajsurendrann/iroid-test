import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import Grids from "../components/Grids";
import Page from "../components/Page";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import data from "../data";

const Home = () => {
  const color =
    "linear-gradient(90deg, rgba(5, 172, 185, 1) 0%, rgba(0, 149, 210, 1) 48%, rgba(58, 25, 190, 1) 100%)";
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {currentUser && (
        <MainContainer>
          <TopContainer>
            <h2>Hi, {currentUser}</h2>
            <Button onClick={handleLogout}>Logout</Button>
          </TopContainer>

          <SearchContainer>
            <span style={{ marginBottom: "10px", fontWeight: 500 }}>
              Name of Organization
            </span>
            <Input placeholder="enter organization name" />
          </SearchContainer>

          <SelectionContainer>
            <span style={{ fontWeight: 500 }}>
              Select your Organization Type below
            </span>
            <GridsContainer>
              {data.map((item) => (
                <Grids key={item.id} icon={item.icon} title={item.title} />
              ))}
            </GridsContainer>
          </SelectionContainer>

          <BottomContainer>
            <Button>Next</Button>
            <TabsContainer>
              <Page color={color} />
              <Page />
              <Page />
              <Page />
              <Page />
            </TabsContainer>
          </BottomContainer>
        </MainContainer>
      )}
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148390177.jpg?w=996&t=st=1685025090~exp=1685025690~hmac=5ec306a7bb7105289df5edeb90212258b79046f9ba1fb25b345736d69136c92a");
  background-size: cover;
  height: 100vh;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    font-weight: bold;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: last baseline;
  width: 50%;
  height: 360px;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
`;

const BottomContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 20px;
  margin: 10px;
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
    transform: scale(110%);
    transition: all ease-in-out 0.2s;
  }
`;

const Input = styled.input`
  width: 30%;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 1px 1px 3px grey;
  height: 25px;
  text-align: center;
`;
